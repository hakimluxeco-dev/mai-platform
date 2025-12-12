import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Mai Marketing Solutions",
        short_name: "Mai Marketing",
        description: "AI-Powered Brand Awareness & Marketing",
        theme_color: "#030712",
        background_color: "#030712",
        display: "standalone",
        start_url: "/marketing/",
        icons: [
          {
            src: "/marketing/logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"]
      }
    })
  ],
  base: "/marketing/",
})
