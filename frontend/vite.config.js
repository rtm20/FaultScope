import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ui-assets/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    proxy: {
      '/api': { target: 'http://127.0.0.1:8767', changeOrigin: false },
      '/assets': { target: 'http://127.0.0.1:8767', changeOrigin: false },
    },
  },
}));