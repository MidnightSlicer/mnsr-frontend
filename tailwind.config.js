/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // make selector later
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // From Material Color Builder
      background: {
        light: '#FFF7FD',
        dark: '#161217',
      },
      'primary': '#9F1AEF',
      'secondary': '#A386B4',
      'tertiary': '#D5747B',
      'error': '#FF5449',
      'neutral': '#948F93',
      'neutralVariant': '#968E98',
      // Other
      'accent': '#7300B9',
      'tri': '#B446F8',
    },
    extend: {},
  },
  plugins: [],
}
