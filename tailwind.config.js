/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        putih: "#f8f9fa;",
        dark: "#0f172a",
        secondary: "#475569",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
