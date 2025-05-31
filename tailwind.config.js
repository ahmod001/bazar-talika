/** @type {import('tailwindcss').Config} */
import colors from './theme/colors';

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary.main,
          light: colors.primary.light,
          dark: colors.primary.dark,
        },
        secondary: {
          DEFAULT: colors.secondary.main,
          light: colors.secondary.light,
          dark: colors.secondary.dark,
        },

      },
    },
  },
  plugins: [],
}