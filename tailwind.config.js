module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    extend: {
      colors: {
        indigo: {
          transparent: "transparent",
          current: "currentColor",
          white: "#ffffff",
          purple: "#7928ca",
          midnight: "#121063",
          metal: "#565584",
          tahiti: "#3ab7bf",
          silver: "#ecebff",
          "bubble-gum": "#ff77e9",
          bermuda: "#78dcca",
          red: "#ff0080",
        },
        green: {
          DEFAULT: "#00f260",
        },
        secondary: "#ff0080", // red
        primary: "#7928ca",
      },
    },
  },
  plugins: [],
};
