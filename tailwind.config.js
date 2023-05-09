/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: { max: "532px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "2400px" },
      // => @media (min-width: 1536px) { ... }
    },
    margin: {
      "2%": "2%",
      "30px": "30px",
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
};
