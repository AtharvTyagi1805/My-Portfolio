/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        classic: ['"Playfair Display"', "serif"],
        cherry: ['"Cherry Swash"', "cursive"],
        berkshire: ['"Berkshire Swash"', "cursive"],
        belleza: ['"Belleza"', "sans-serif"],
        bevietnam: ['"Be Vietnam Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /\\[.*\\]/, // allows arbitrary Tailwind classes like [-webkit-text-stroke:1px_white]
    },
  ],
};
