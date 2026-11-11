# Aviv PMS – React

React (Vite, JavaScript) version of the Aviv PMS front end (The Aviv Kochi).

Every legacy HTML screen and tab page (1,564 pages) is now a React component in `src/screens/`.
Markup, CSS and layout come from the original design. The stylesheets for each screen are loaded when the screen opens and removed when you leave it.

## Run

    npm install
    npm run dev        # http://localhost:5173  (or the port Vite prints)
    npm run build      # production build in dist/
    npm run preview

## Layout

    src/
      main.jsx                    entry; wraps the app in the router
      App.jsx                     picks the page for the current URL
      routes.generated.js         route table for all 1,564 pages (generated)
      lib/router.jsx              small router: <Link>, useLocation, useNavigate
      components/ScreenShell.jsx  loads a screen's CSS and title while it is open
      pages/Launcher.jsx          module launcher at "/" (searchable, 825 screens)
      screens/<module>/...jsx     one component per legacy page (generated)
    public/
      css/, js/, assets/          original stylesheets, scripts, icons (used by the screens)
      <module>/.../*.css          each screen's own stylesheet
      <module>/.../u-emp-*.html   159 per-employee copies of the user form, still static files

URLs are the same as before, for example `/front-desk/fd-03-check-in` or
`/front-desk/fd-03-check-in/step-2-id-documents`.

## What is converted and what is not

Converted: all markup of all 1,564 screen and tab pages, inline `<style>` blocks, stylesheet links,
page titles, and internal links between converted pages (`<a>` becomes `<Link>`, so navigation does not reload the app).

**Not yet converted (important):**
* **Behaviour.** The original page scripts (`*.js` in each folder, `js/core`, `js/components`, `js/domain`, `js/services`) are not ported. Static design and layout work. Interactive parts such as step validation, dialogs, search results and dynamic lists do not work until their logic is ported to React. The file header of each affected screen lists the script it needs.
* **Pages that build their content with JS.** Example: `common/cm-02-search` is empty until its script is ported.
* **Theme scripts** (`theme-boot.js`, `theme-studio.js`) are not run, so the theme switcher does not work yet.
* **The 159 `u-emp-*.html` copies.** They are not converted and remain static files.

## Regenerating the components

`scripts/convert_legacy.py` is a one-time converter. It reads the original site (the extract of `PMS_v15.zip`):

    LEGACY_SRC=/path/to/original-site python3 scripts/convert_legacy.py --keep-html
    python3 scripts/convert_legacy.py --strip   # delete the legacy HTML that now has a React page

After converting, the React files are the source of truth. Edit the `.jsx` files directly, not the generated HTML.

## Notes

* Bundle size is large: the screens contain about 500 MB of JSX because the original markup is large (one screen's HTML is 8 MB). `npm run build` will take a while and produce many chunks, one per screen.
* For production hosting, serve `index.html` for unknown paths (SPA fallback), as `vite preview` does.
* Next steps: port the page scripts module by module (start with Front Desk), then move shared markup (sidebar, topbar) into shared React components.

## Sign-in

Like the legacy app, opening any page while signed out goes to the sign-in page first (`/common/cm-01-login`), and returns you to the page you asked for after signing in.

* The sign-in screen is the original design (`src/screens/common/cm-01-login.jsx`), with the original script (`common/cm-01-login/cm-01-login.js`) running on it. The route guard in `src/App.jsx` checks the session.
* Demo sign-in: password `Aviv@2026`, then code `123456` or PIN `2026`. Replace the demo auth in `js/services/mock/auth.js` with the real API before going live.
* The session is kept in `sessionStorage` under `avivpms.session`, the same key the legacy app uses.

## Running it

Use the Vite dev server, not VS Code Live Server. Live Server serves the old static pages, which have no React shell.

    npm install
    npm run dev       # then open http://localhost:5173 (the port Vite prints)

A large screen can take a few seconds the first time. If a screen still does not appear after about 30 seconds, check the browser console (F12). Errors now show on the page too. The dev server compiles JSX with esbuild (no Babel), which keeps the big screens fast.

## Loading state

While a large screen loads, the loader uses the theme variables (`--forest`, `--gold`, `--surface`, `--line`) set by the theme studio, so it follows the chosen colour theme and dark mode.

## Theme

The theme studio's choice (saved as `avivpms.theme`) applies to every screen. `index.html` loads `theme-boot.js` before the first paint, and `theme-studio.js` gives the THEME panel.

## Opening screens

* Hovering or focusing a link downloads that screen's code in advance, so most screens open at once.
* The loader appears only if a screen takes more than a quarter of a second to open.
