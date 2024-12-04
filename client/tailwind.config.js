/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Custom breakpoint for very large screens
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif", "roboto"], // Adjust to match the font
      },
    },
  },
  plugins: [],
};
