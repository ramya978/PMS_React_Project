// Small client-side router (no external dependency).
// Provides the same surface the converted screens use: <Link to>, useLocation(), useNavigate().
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { prefetch } from '../routes.generated.js';

const RouterContext = createContext(null);

function currentPath() {
  return window.location.pathname;
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const onPop = () => setPath(currentPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to, options = {}) => {
    if (options.replace) {
      window.history.replaceState({}, '', to);
    } else if (to !== window.location.pathname + window.location.search) {
      window.history.pushState({}, '', to);
    }
    // Keep only the pathname in state; the query string stays in window.location.search.
    setPath(new URL(to, window.location.origin).pathname);
    window.scrollTo(0, 0);
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useLocation() {
  return useContext(RouterContext).path;
}

export function useNavigate() {
  return useContext(RouterContext).navigate;
}

export function Link({ to, onClick, target, children, ...rest }) {
  const navigate = useNavigate();
  return (
    <a
      href={to}
      target={target}
      onMouseEnter={(e) => { rest.onMouseEnter?.(e); if (!target) prefetch(to); }}
      onFocus={(e) => { rest.onFocus?.(e); if (!target) prefetch(to); }}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        const modified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
        if (e.defaultPrevented || modified || target) return;
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
