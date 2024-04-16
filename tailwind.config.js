/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {
      // colors: {
      //   // Define custom colors here based on your theme configuration
      //   primary: 'var(--theme-primary-color)',
      //   secondary: 'var(--theme-secondary-color)',
      //   text: 'var(--theme-text-color)',
      //   background: 'var(--theme-background-color)',
      //   border: 'var(--theme-border-color)',
      // },
    },
  },
  plugins: [],
}

