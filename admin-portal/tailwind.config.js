/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  lightMode: ["class", '[data-mode="light"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
