/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '300px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      caveat: ['Caveat'],
      archivo: ['Archivo Black'],
      Varela: ['Varela Round'],
      Mplus: ['M PLUS Rounded 1c'],
      nunito: ['Nunito'],
      dmserif: ['DM Serif Display'],
      League: ['League Spartan'],
    },
    extend: {},
  },
  plugins: [],
};