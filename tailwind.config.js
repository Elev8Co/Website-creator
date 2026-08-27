/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        ink: '#F2EFE9',
        muted: '#9A9A9E',
        surface: '#17181B',
      },
    },
  },
  plugins: [],
};
