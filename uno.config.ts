import presetWebFonts from "@unocss/preset-web-fonts";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import { defineConfig, presetAttributify, presetTypography, presetWind, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetWind({
      dark: "media",
    }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: [
          {
            name: "Poppins",
            weights: [400, 500],
          },
          {
            name: "Roboto",
            weights: [400, 500],
          },
          {
            name: "Open Sans",
            weights: [400, 500],
          },
          {
            name: "ui-sans-serif",
            provider: "none",
          },
          {
            name: "system-ui",
            provider: "none",
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
      extendTheme: true,
      processors: createLocalFontProcessor({
        cacheDir: "node_modules/.cache/unocss/fonts",
        fontAssetsDir: "public/assets/fonts",
        fontServeBaseUrl: "/assets/fonts",
      }),
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  content: {
    filesystem: ["src/**/*.{tsx,css}"],
  },
  theme: {
    colors: {
      primary: {
        0: "#FFFFFF",
        100: "#F5F8FE",
        200: "#EBF1FD",
        300: "#E0EAFC",
        400: "#D6E3FB",
        500: "#CCDCFB",
        600: "#C2D4FA",
        700: "#B8CDF9",
        800: "#ADC6F8",
        900: "#A3BFF7",
        1000: "#99B8F6",
      },
      "primary-dark": {
        0: "#E6EDFD",
        50: "#CCDCFB",
        100: "#99B8F6",
        200: "#6695F2",
        300: "#3371ED",
        400: "#004EE9",
        500: "#003EBA",
        600: "#002F8C",
        700: "#001F5D",
        800: "#00102F",
        900: "#000817",
      },
      "background-dark-90": "#111111",
      "background-dark-80": "#181a1b",
      "background-light-10": "#f8faff",
      "background-light-0": "#ffffff",
    },
    listStyleType: {
      alpha: "lower-alpha",
    },
  },
});
