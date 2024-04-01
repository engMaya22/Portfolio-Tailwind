/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      spacing:{
        big: "46rem",
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      nunito:  ["Nunito", "sans-serif"]

    }
   
  },
  plugins: [],
}

