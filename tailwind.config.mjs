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
          muted: "#C8A951/15",
        },
        surface: {
          light: "#FAFAF8",
          dark: "#111111",
        },
        border: {
          light: "#E8E4DC",
          dark: "#222222",
        },
      },
      fontFamily: {
        heading: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
