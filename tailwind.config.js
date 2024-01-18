/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#1fdf64",
        Black: "#000",
        DeepNightBlack: "#121212",
        MidNightBlack: "#181818",
        EveningBlack: "#1a1a1a",
        DarkGray: "#282828",
        SlateGray: "#404040",
        LightGray: "#959595",
        SilverGray: "#B3B3B3",
        Snow: "#ffffff",
        Gray200: "#f2f2f2",
        Gray300: "#e0e0e0",
        Gray900: "#222222",
        Gray700: "#616161",
        Gray100: "#f5f5f5",
      },
      fontFamily: {
        "cascadia-normal": ["cascadia-normal"],
        circular: ["circular-normal", "sans-serif"],
        "circular-light": ["circular-light", "sans-serif"],
        "circular-normal": ["circular-normal", "sans-serif"],
        "circular-medium": ["circular-medium", "sans-serif"],
        "circular-bold": ["circular-bold", "sans-serif"],
      },
    },
  },
};
