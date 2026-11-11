import { useEffect, useState } from 'react';

// Full-screen loader shown while a screen's code and styles are downloaded. It uses the hotel
// night illustration as its backdrop and the theme variables for the card, so it follows the
// chosen colour theme and dark mode. It appears only after 250 ms, so quick screens never flash it.
export default function Loading({ code, title, message }) {
  const [shown, setShown] = useState(false);
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    const show = setTimeout(() => setShown(true), 250);
    const hint = setTimeout(() => setSlow(true), 6000);
    return () => { clearTimeout(show); clearTimeout(hint); };
  }, []);
  if (!shown) return null;

  return (
    <div
      className="pl-loading-screen"
      role="status"
      aria-live="polite"
      style={{ '--loader-art': 'url(/assets/loader/hotel-night.jpg)' }}
    >
      <div className="pl-loading-art" aria-hidden="true" />
      <div className="pl-loading-card">
        <div className="pl-loading-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" focusable="false"><use href="/assets/icons/sprite.svg#leaf" /></svg>
        </div>
        <div className="pl-loading-brand">Aviv PMS</div>
        <div className="pl-loading-title">{title || 'Opening screen'}</div>
        {code && <div className="pl-loading-code">{code}</div>}
        <div className="pl-loading-bar" aria-hidden="true"><span /></div>
        <div className="pl-loading-text">{message || 'Opening…'}</div>
        {slow && (
          <p className="pl-loading-hint">
            This screen is large, so the first open can take a little while. If nothing appears after about 30 seconds, reload the page.
          </p>
        )}
      </div>
    </div>
  );
}
