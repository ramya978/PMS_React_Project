import { useEffect } from 'react';
// The original sign-in screen (design and markup), converted to React.
import CmLogin from '../screens/common/cm-01-login.jsx';

// The original sign-in behaviour (email + password, OTP / PIN, forgot password, demo accounts)
// is the legacy module common/cm-01-login/cm-01-login.js. It works on the same markup, so we run it here
// after the screen is on the page. Its dependencies are plain ES modules under /js.
const LEGACY_LOGIN_MODULE = '/common/cm-01-login/cm-01-login.js';

export default function Login() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (cancelled) return;
        // Cache-busted so the module runs again on every visit to this screen.
        await import(/* @vite-ignore */ `${LEGACY_LOGIN_MODULE}?visit=${Date.now()}`);
      } catch (err) {
        console.error('Sign-in script failed to load:', err);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return <CmLogin />;
}
