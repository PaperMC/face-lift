import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "media",
  extract: {
    include: ["**/*.{tsx,css}"],
    exclude: ["node_modules", ".git", ".next/**/*"],
  },
  attributify: true,
  plugins: [require("windicss/plugin/aspect-ratio")],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "Roboto",
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      // https://github.com/HangarMC/Hangar/blob/master/frontend-new/windi.config.ts#L80
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
  },
  shortcuts: {
    hero: "max-w-7xl flex flex-row mx-auto px-4 pt-20 pb-16 lg:pt-30 lg:pb-26 gap-16",
  },
});
