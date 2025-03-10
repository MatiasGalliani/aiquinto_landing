/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': '1200px', // o el valor que necesites
      // ...otros breakpoints
    },
    // ...otras configuraciones
  },
  plugins: [],
  // ...otras configuraciones
}
