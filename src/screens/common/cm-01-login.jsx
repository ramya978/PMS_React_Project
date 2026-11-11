// GENERATED from public/common/cm-01-login/index.html by scripts/convert_legacy.py.
// Markup converted to JSX. Legacy page scripts and inline on* handlers are not ported yet.
// Legacy scripts not ported: cm-01-login.js
import { Link } from '../../lib/router.jsx';
import ScreenShell from '../../components/ScreenShell.jsx';

const SHEETS = [
  {
    "href": "/css/aviv/aviv.css",
    "media": null
  },
  {
    "href": "/css/aviv/legacy.css",
    "media": null
  },
  {
    "href": "/common/cm-01-login/cm-01-login.css",
    "media": null
  },
  {
    "href": "/css/aviv/refresh.css",
    "media": null
  },
  {
    "href": "/css/aviv/responsive.css",
    "media": null
  },
  {
    "href": "/css/aviv/theme.css",
    "media": null
  }
];
const INLINE_CSS = null;

export default function CommonCm01Login() {
  return (
    <ScreenShell title="Sign in" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="CM-01" className="legacy-body">
        <main className="login" data-code="CM-01">
          <section className="login__art" aria-hidden="true">
            <svg className="login__aviv" viewBox="0 0 320 420" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M160 410V70" strokeWidth="2.5" />
              <g strokeWidth="2">
                <path d="M160 360c-40-6-72-30-88-70 38 4 70 28 88 70z" />
                <path d="M160 360c40-6 72-30 88-70-38 4-70 28-88 70z" />
                <path d="M160 300c-36-6-64-28-78-62 34 3 62 25 78 62z" />
                <path d="M160 300c36-6 64-28 78-62-34 3-62 25-78 62z" />
                <path d="M160 240c-30-6-54-24-66-54 28 3 52 21 66 54z" />
                <path d="M160 240c30-6 54-24 66-54-28 3-52 21-66 54z" />
                <path d="M160 182c-24-5-42-20-52-44 22 3 40 18 52 44z" />
                <path d="M160 182c24-5 42-20 52-44-22 3-40 18-52 44z" />
                <path d="M160 128c-16-4-28-14-34-30 15 2 27 12 34 30z" />
                <path d="M160 128c16-4 28-14 34-30-15 2-27 12-34 30z" />
                <path d="M160 70c-8-6-12-16-12-28 9 6 12 16 12 28z" />
                <path d="M160 70c8-6 12-16 12-28-9 6-12 16-12 28z" />
              </g>
            </svg>
            <div className="login__brand">
              <p className="login__eyebrow">{"Aviv Hotels"}</p>
              <p className="login__name">{"The Aviv Kochi"}</p>
              <p className="login__tag">{"Reservations, rates and guests – calm, quick and in one place."}</p>
            </div>
          </section>
          <section className="login__panel">
            <div className="login__card" id="login-card">
              <div className="login__head">
                <span className="login__mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22V9M12 9C9 8 7 5 7 2c3 1 5 3 5 7zm0 0c3-1 5-4 5-7-3 1-5 3-5 7zm0 7c-3-.5-5-2.5-6-5 3 0 5 2 6 5zm0 0c3-.5 5-2.5 6-5-3 0-5 2-6 5z" />
                  </svg>
                </span>
                <div>
                  <h1 className="login__title">{"Welcome back"}</h1>
                  <p className="login__sub">{"Sign in to Aviv PMS"}</p>
                </div>
              </div>
              <div className="login__signedin" id="signed-in" hidden={true}>
                <p>
                  {"You are already signed in as "}
                  <strong id="signed-in-name" />
                  {"."}
                </p>
                <div className="row">
                  <Link className="btn btn--primary" id="continue" to={"/"}>{"Continue"}</Link>
                  <button className="btn" type="button" id="switch-user">{"Sign in as someone else"}</button>
                </div>
              </div>
              <form id="login-form" noValidate={true}>
                <p className="login__error" id="login-error" role="alert" hidden={true} />
                <div className="stack">
                  <div className="field" id="email-field">
                    <label className="field__label" htmlFor="email">
                      {"Email "}
                      <span className="field__req" aria-hidden="true">{"*"}</span>
                    </label>
                    <input className="field__input" id="email" name="email" type="email" autoComplete="username" required={true} aria-required="true" aria-describedby="email-err" placeholder="name@avivkochi.example" autoFocus={true} />
                    <p className="field__error" id="email-err" hidden={true} />
                  </div>
                  <div className="field" id="password-field">
                    <label className="field__label" htmlFor="password">
                      {"Password "}
                      <span className="field__req" aria-hidden="true">{"*"}</span>
                    </label>
                    <div className="field__wrap field__wrap--btn">
                      <input className="field__input" id="password" name="password" type="password" autoComplete="current-password" required={true} aria-required="true" aria-describedby="password-err caps-warning" />
                      <button className="field__btn" type="button" id="toggle-password" aria-label="Show password" aria-pressed="false">
                        <svg className="icon" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#eye" />
                        </svg>
                      </button>
                    </div>
                    <p className="login__caps" id="caps-warning" role="status" hidden={true}>{"Caps Lock is on – your password is case sensitive."}</p>
                    <p className="field__error" id="password-err" hidden={true} />
                  </div>
                  <div className="row row--between">
                    <label className="check">
                      <input className="check__input" type="checkbox" id="remember" />
                      <span className="check__box" aria-hidden="true">
                        <svg className="icon">
                          <use href="/assets/icons/sprite.svg#check" />
                        </svg>
                      </span>
                      <span className="check__label">{"Remember this device for 30 days"}</span>
                    </label>
                    <button className="login__link" type="button" data-opens="CM-P02">{"Forgot password?"}</button>
                  </div>
                  <button className="btn btn--primary login__submit" type="submit" id="submit">
                    <span className="btn__label">{"Sign in"}</span>
                  </button>
                </div>
              </form>
              <details className="login__demo" id="demo">
                <summary>{"Demo accounts"}</summary>
                <p className="login__demo-note">
                  {"This is a demo. Password "}
                  <code>{"Aviv@2026"}</code>
                  {", one-time code "}
                  <code>{"123456"}</code>
                  {", PIN "}
                  <code>{"2026"}</code>
                  {". Pick a person to fill the form."}
                </p>
                <ul id="demo-list" className="login__demo-list" />
              </details>
            </div>
            <p className="login__foot">{"The Aviv Kochi · Bristow Road, Willingdon Island, Kochi"}</p>
          </section>
        </main>
        <dialog className="dialog dialog--sm" data-code="CM-P01" aria-labelledby="otp-title">
          <form id="otp-form" method="dialog" noValidate={true}>
            <header className="dialog__header">
              <div>
                <h2 className="dialog__title" id="otp-title">{"Enter your code"}</h2>
                <p className="dialog__desc" id="otp-desc">{"We sent a 6-digit code."}</p>
              </div>
              <button className="btn btn--ghost btn--icon" type="button" data-close="" aria-label="Close">
                <svg className="icon" aria-hidden="true">
                  <use href="/assets/icons/sprite.svg#x" />
                </svg>
              </button>
            </header>
            <div className="dialog__body stack">
              <div className="field" data-fw="s">
                <label className="field__label" htmlFor="otp-code" id="otp-label">{"One-time code"}</label>
                <input className="field__input otp__input num" id="otp-code" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength="6" aria-describedby="otp-err" placeholder="••••••" />
                <p className="field__error" id="otp-err" role="alert" hidden={true} />
              </div>
              <label className="check">
                <input className="check__input" type="checkbox" id="otp-remember" />
                <span className="check__box" aria-hidden="true">
                  <svg className="icon">
                    <use href="/assets/icons/sprite.svg#check" />
                  </svg>
                </span>
                <span className="check__label">{"Do not ask again on this device for 30 days"}</span>
              </label>
              <p className="field__hint">
                <button className="login__link" type="button" id="otp-resend">{"Send a new code"}</button>
                {" "}
                <span id="otp-resend-note" role="status" />
              </p>
            </div>
            <footer className="dialog__footer">
              <button className="btn" type="button" data-close="">{"Back"}</button>
              <button className="btn btn--primary" type="submit" id="otp-submit">
                <span className="btn__label">{"Verify and sign in"}</span>
              </button>
            </footer>
          </form>
        </dialog>
        <dialog className="dialog dialog--sm" data-code="CM-P02" aria-labelledby="fp-title">
          <form id="fp-form" method="dialog" noValidate={true}>
            <header className="dialog__header">
              <div>
                <h2 className="dialog__title" id="fp-title">{"Reset your password"}</h2>
                <p className="dialog__desc" id="fp-desc">{"Enter your email and we will send a 6-digit code to your phone."}</p>
              </div>
              <button className="btn btn--ghost btn--icon" type="button" data-close="" aria-label="Close">
                <svg className="icon" aria-hidden="true">
                  <use href="/assets/icons/sprite.svg#x" />
                </svg>
              </button>
            </header>
            <div className="dialog__body stack">
              <div className="field">
                <label className="field__label" htmlFor="fp-email">{"Email"}</label>
                <input className="field__input" id="fp-email" type="email" autoComplete="email" aria-describedby="fp-email-err" required={true} />
                <p className="field__error" id="fp-email-err" hidden={true} />
              </div>
              <div className="stack" id="fp-step2" hidden={true}>
                <div className="field" data-fw="x">
                  <label className="field__label" htmlFor="fp-code">{"6-digit code"}</label>
                  <input className="field__input num" id="fp-code" type="text" inputMode="numeric" maxLength="6" autoComplete="one-time-code" aria-describedby="fp-code-err" />
                  <p className="field__error" id="fp-code-err" hidden={true} />
                </div>
                <div className="field">
                  <label className="field__label" htmlFor="fp-new">{"New password"}</label>
                  <input className="field__input" id="fp-new" type="password" autoComplete="new-password" aria-describedby="fp-new-hint fp-new-err" />
                  <ul className="login__rules" id="fp-new-hint" />
                  <p className="field__error" id="fp-new-err" hidden={true} />
                </div>
              </div>
              <p className="login__info" id="fp-info" role="status" hidden={true} />
            </div>
            <footer className="dialog__footer">
              <button className="btn" type="button" data-close="">{"Cancel"}</button>
              <button className="btn btn--primary" type="submit" id="fp-submit">
                <span className="btn__label">{"Send code"}</span>
              </button>
            </footer>
          </form>
        </dialog>
      </div>
    </ScreenShell>
  );
}
