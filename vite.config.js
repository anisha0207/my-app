import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app2/', // IMPORTANT:  Match your repository name!
  build: {
    outDir: 'dist', // This is usually the default, but let's be explicit
    emptyOutDir: true, // Ensure the output directory is clean before each build
  },
});

