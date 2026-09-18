import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
// base: '/' — correct for Vercel/Netlify (served from domain root).
// For GitHub Pages, temporarily change to base: '/<repo-name>/' and run `npm run deploy`.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), svgr()],
})
