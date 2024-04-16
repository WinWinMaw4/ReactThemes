/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        extraColor: {
          0:"#fff",
          50: "#FA8484",
          100: "#FA7878",
          200: "#FA6A6A",
          300: "#FA5B5B",
          400: "#F94B4B",
          500: "#E24444",
          600: "#CD3E3E",
          700: "#BA3838",
          800: "#A93333",
          900: "#9A2E2E",
          DEFAULT: "#F94B4B",
        },
      },
    },
  },
  plugins: [],
}

