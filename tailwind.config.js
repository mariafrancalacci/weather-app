module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    maxWidth: {
      "1/2": "50%",
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        background: {
          300: "#FFFFFF",
          500: "#F0F0F0",
        },
        brand: {
          300: "#545454",
        },
      },
    },
  },
  plugins: [],
};
