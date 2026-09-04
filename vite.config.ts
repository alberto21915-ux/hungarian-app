import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' makes the build work when served from a GitHub Pages
// subpath (username.github.io/repo-name/) without hardcoding the repo name.
export default defineConfig({
  base: './',
  plugins: [react()],
})
