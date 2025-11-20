/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important: Adjust if your project structure differs
  ],
  theme: {
  extend: {
    colors: {
      primary: "#363636f4",
      secondary: "#faf8f5",
      accent: "#d4af37",

      foreground: "#0a0a0a",

      muted: "#e8e6e3",
      "muted-foreground": "#717182",

      rosegold: "#b76e79",
      copper: "#b87333",

      charcoal: "#2d2d2d",
      navy: "#0f1624",
      offwhite: "#f7f5f2",

      border: "rgba(0, 0, 0, 0.1)",
      inputBackground: "#f3f3f5",
      switchBackground: "#cbced4",
    },

    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      serif: ["ui-serif", "Georgia", "serif"],
    },
  },
},

  plugins: [],
};