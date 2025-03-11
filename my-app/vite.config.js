
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  root: 'my-app',  // Set `my-app` as the root
  plugins: [preact()],
  build: {
    outDir: '../dist',  // Output to `dist/` at the parent level
  },
});
