import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// `base: '/'` because this deploys to a GitHub *user* page
// (matheusferraro.github.io) served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
