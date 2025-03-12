import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Remove repository name for Netlify
  build: {
    outDir: 'dist',
    manifest: true // Helps with asset tracking
  }
})
