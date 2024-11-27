import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f4f8fa",
          "100": "#e6edf3",
          "200": "#d3dfea",
          "300": "#a6bfd3",
          "400": "#92afc8",
          "500": "#7896b9",
          "600": "#6581ab",
          "700": "#5a709b",
          "800": "#4d5d80",
          "900": "#414e67",
          "950": "#2b3240",
          DEFAULT: "#2b3240",
        },
        dark: {
          "50": "#f5f7fa",
          "100": "#eaeff4",
          "200": "#cfdce8",
          "300": "#a6bfd3",
          "400": "#759cbb",
          "500": "#5480a3",
          "600": "#416788",
          "700": "#35526f",
          "800": "#2f475d",
          "900": "#2c3e50",
          "950": "#1d2834",
          DEFAULT: "#1d2834",
        },
        light: {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#e4e4e4",
          "300": "#c8c8c8",
          "400": "#adadad",
          "500": "#999999",
          "600": "#888888",
          "700": "#7b7b7b",
          "800": "#676767",
          "900": "#545454",
          "950": "#363636",
          DEFAULT: "#e4e4e4",
        },
        black: {
          DEFAULT: "#ffffff",
          "900": "#141414",
          "800": "#1c1c1c",
        },
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        parkinsans: ["var('--font-parkinsans')"],
        spaceGrotesk: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
