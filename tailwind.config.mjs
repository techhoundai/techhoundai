/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8A951",
          light: "#D4B863",
          dark: "#A68A3E",
          bright: "#FFD700",
          muted: "#C8A951/15",
        },
        surface: {
          light: "#F5F5F0",
          dark: "#0D0D14",
          darker: "#08080E",
        },
        border: {
          light: "#E0DCD0",
          dark: "#1A1A28",
        },
        void: "#050508",
      },
      fontFamily: {
        heading: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
