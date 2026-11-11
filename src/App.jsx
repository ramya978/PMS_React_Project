import { Suspense, useEffect } from 'react';
import { useLocation, useNavigate } from './lib/router.jsx';
import { routes } from './routes.generated.js';
import { getSession } from './lib/session.js';
import Launcher from './pages/Launcher.jsx';
import Login from './pages/Login.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Loading from './components/Loading.jsx';

const LOGIN_PATH = '/common/cm-01-login';
const normalise = (p) => p.replace(/\/+$/, '') || '/';

export default function App() {
  const path = normalise(useLocation());
  const navigate = useNavigate();
  const signedIn = getSession() !== null;

  // Same rule as the legacy start page: signed-out people go to sign-in first.
  useEffect(() => {
    if (!signedIn && path !== LOGIN_PATH) {
      const next = path === '/' ? '' : `?next=${encodeURIComponent(path)}`;
      navigate(`${LOGIN_PATH}${next}`, { replace: true });
    }
    if (signedIn && path === LOGIN_PATH) {
      navigate('/', { replace: true });
    }
  }, [signedIn, path, navigate]);

  if (!signedIn && path !== LOGIN_PATH) return null; // redirecting

  if (path === LOGIN_PATH) return <Login />;
  if (path === '/') return <Launcher />;

  const route = routes.find((r) => normalise(r.path) === path);
  if (!route) {
    return (
      <div className="pl-page">
        <p className="pl-empty">Page not found: {path}</p>
        <a href="/">Back to all modules</a>
      </div>
    );
  }

  const Screen = route.component;
  return (
    <ErrorBoundary key={path}>
      <Suspense fallback={<Loading code={route.code} title={route.title} />}>
        <Screen />
      </Suspense>
    </ErrorBoundary>
  );
}
