// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
          'sans': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      textShadow: {
        lg: "0 2px 4px rgba(0, 0, 0, 0.10)",
        // Add other sizes if needed
      },
      colors: {
        primary: "#9c1b6d", // Darker pink shade
        secondary: "#e91e63", // Secondary color
        dark: "#000000", // Black for text
        light: "#ffffff", // White for text and background
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
