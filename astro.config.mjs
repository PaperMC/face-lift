import icon from "astro-icon";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: "src/assets",
    }),
    UnoCSS({
      injectReset: true,
    }),
  ],
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.opencollective.com",
      },
    ],
  },
  output: "hybrid",
  adapter: cloudflare(),
});
