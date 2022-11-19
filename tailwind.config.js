/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray: {
          1: "#f1f2f3",
          2: "#e1e1e3",
          3: "#b9b9b9",
          4: "#676767",
          5: "#414143",
        },
        "blue-light": "#eaf2fd",
        blue: "#5d95ea",
        "blue-dark": "#145dcc",
        green: "#52B549",
        red: "#db4f44",
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"],
      },
      width: {
        7.5: "1.875rem",
      },
      height: {
        7.5: "1.875rem",
      },
      borderWidth: {
        5: "5px",
      },
      borderRadius: {
        5: "5px",
        30: "1.875rem" /* 30px */,
      },
      boxShadow: {
        s: "0px 3px 6px #00000029",
      },
    },
  },
  plugins: [],
};
