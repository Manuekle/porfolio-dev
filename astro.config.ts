import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  output: "hybrid",
  vite: {
    build: {
      cssMinify: "lightningcss"
    },
    ssr: {
      noExternal: ["path-to-regexp"]
    }
  }
})