/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inset:
          "inset 0 -2px 4px 0 rgb(0 0 0 / 0.1), inset 0 2px 4px 0 rgba(255 255 255 / 0.2), 0 1px 2px 0 rgb(0 0 0 / 0.05);",
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
