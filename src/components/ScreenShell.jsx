// Wraps one converted legacy screen. It loads the screen's stylesheets and inline CSS first, and only
// then shows the markup, so a screen never appears unstyled. While the CSS is loading, the themed
// loader stays on screen. When you leave the screen, its stylesheets are removed, so one screen's
// CSS never leaks into the next.
import { useLayoutEffect, useState } from 'react';
import Loading from './Loading.jsx';

export default function ScreenShell({ title, sheets = [], inlineCss = null, children }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useLayoutEffect(() => {
    let cancelled = false;
    setReady(false);
    setFailed(false);

    const previousTitle = document.title;
    document.title = title;

    const added = sheets.map((s) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = s.href;
      if (s.media) link.media = s.media;
      link.dataset.screenSheet = '1';
      document.head.appendChild(link);
      return link;
    });

    let styleEl = null;
    if (inlineCss) {
      styleEl = document.createElement('style');
      styleEl.dataset.screenSheet = '1';
      styleEl.textContent = inlineCss;
      document.head.appendChild(styleEl);
    }

    // Show the markup only once every stylesheet has loaded. There is no timeout fallback: markup
    // is never shown without its CSS. If a stylesheet fails to load, the loader stays with a message.
    const loaded = added.map((link) => new Promise((resolve, reject) => {
      link.addEventListener('load', () => resolve(), { once: true });
      link.addEventListener('error', () => reject(new Error(link.href)), { once: true });
    }));
    Promise.all(loaded)
      .then(() => { if (!cancelled) setReady(true); })
      .catch(() => { if (!cancelled) setFailed(true); });

    return () => {
      cancelled = true;
      document.title = previousTitle;
      added.forEach((l) => l.remove());
      if (styleEl) styleEl.remove();
    };
  }, [title, sheets, inlineCss]);

  if (failed) {
    return (
      <Loading title={title} message="The screen's styles could not be loaded. Reload the page to try again." />
    );
  }
  if (!ready) return <Loading title={title} />;
  return <>{children}</>;
}
