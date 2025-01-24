/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        orangeDark: "#E65125", // Dark orange (code couleur)
      },
    },
  },
  plugins: [],
};
