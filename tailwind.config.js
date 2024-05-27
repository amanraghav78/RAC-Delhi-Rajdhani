// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#9c1b6d', // Darker pink shade
        secondary: '#e91e63', // Secondary color
        dark: '#000000', // Black for text
        light: '#ffffff', // White for text and background
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
