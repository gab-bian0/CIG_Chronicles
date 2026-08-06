import { defineConfig } from 'vite';

export default defineConfig({
  // Il percorso relativo rende la build compatibile sia con GitHub Pages
  // (anche sotto /nome-repository/) sia con un normale server statico.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
});
