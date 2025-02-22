/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilda: "Gilda Display, serif",
      },
      screens: {
        "laptop" : "1024px",
        "laptopL" : "1440px",
        "4k" : "2560px",
      },
    },
  },
  plugins: [],
};
