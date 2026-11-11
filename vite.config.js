import { defineConfig } from 'vite';

// The legacy screens live in /public and are served as-is at their original URLs
// (/front-desk/fd-03-check-in/ etc.), so their absolute links keep working.
//
// JSX is compiled by esbuild (built into Vite) instead of @vitejs/plugin-react. Babel is slow on the
// very large generated screens (some are 5–14 MB), which made the dev server take minutes to open them.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
  server: { port: 5500, host: true },
  build: { chunkSizeWarningLimit: 20000 },
});
