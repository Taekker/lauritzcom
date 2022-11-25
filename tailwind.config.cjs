/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "960px",
      desktop: "1248px",
    },
    colors: {
      beige: "#EEE8DF",
      lightgreen: "#DEEBE3",
      green: "#3E854F",
      white: "#FFFFFF",
      grey: "#D9D9D9",
      red: "#FF2929",
      black: "#2B2B2B",
    },
    fontFamily: {
      poppins: "poppins",
    },

    fontSize: {
      sm: ["20px"],
      lg: ["30px"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
