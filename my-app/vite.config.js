import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig({
  root: './',  // This will make Vite look in the current directory (which is the root directory for index.html)
  plugins: [preact()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
