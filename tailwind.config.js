/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    
    extend: {
      colors:{
        "purple":"#ad2ce0",
        "backcolor2":"#F8FAFC",
        "backcolor1":"#D1EDF5"
      }
    },

    screens: {
      'mobile':'300px',
    // => @media (min-width: 430px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
