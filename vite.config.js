import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { generateSeoFiles } from './scripts/generate-seo.mjs'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'marvmedia-build-seo',
        apply: 'build',
        async closeBundle() {
          await generateSeoFiles({
            apiBaseUrl: env.VITE_PUBLIC_API_URL,
            siteUrl: env.VITE_SITE_URL,
          })
        },
      },
    ],
  }
})
