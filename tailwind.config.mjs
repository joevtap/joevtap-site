/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        display: [
          "Space Grotesk Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ["JetBrains Mono Variable", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
