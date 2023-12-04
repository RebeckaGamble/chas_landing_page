/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'big-screen': '1365px',
        // => @media (min-width: 1365px) { ... }

      },
      colors: {
        chasBlue: "rgb(76, 100, 255)",
        chasBlack: "rgb(43, 47, 47)",
      },
      fontFamily: {
        sans: ["'Roboto Condensed'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
  ],
}

