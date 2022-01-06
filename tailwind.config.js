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
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px -10px #14161c",
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
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
