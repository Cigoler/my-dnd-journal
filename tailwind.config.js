/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        cinzel: ["var(--font-cinzel)", "cursive"],
        cinzel_decorative: ["var(--font-cinzel-decorative)", "cursive"],
        pica: ["var(--font-pica)", "serif"],
        picaSC: ["var(--font-pica-sc)", "serif"],
      },
    },
  },
  plugins: [],
};
