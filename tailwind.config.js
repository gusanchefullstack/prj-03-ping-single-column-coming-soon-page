module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        franklin: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        blue: "hsl(223, 87%, 63%)",
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        VeryDarkBlue: "hsl(209, 33%, 12%)",
      }
    },
  },
  plugins: [],
};
