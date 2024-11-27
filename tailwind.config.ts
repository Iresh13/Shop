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
          "100": "#4b6cb7",
          "500": "#4b6cb7",
          DEFAULT: "#182848",
        },
        dark: {
          "100": "#2c3e50",
          "200": "#0F1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#3F4354",
          DEFAULT: "#2c3e50",
        },
        light: {
          "400": "#858EAD",
          "500": "#7B8EC8",
          "700": "#DCE3F1",
          "800": "#F4F6F8",
          "850": "#FDFDFD",
          "900": "#FFFFFF",
        },
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        parkinsans: ["var('--font-parkinsans')"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
