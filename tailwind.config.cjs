/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '450px',
      'md': '547px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    extend: {
      colors: {
        primary: "#62c4da",
        secondary: "#02ffef",
        dark: {
          500: "#101414",
          800: "#010100",
        }
      },
    },
  },
  plugins: [],
};
