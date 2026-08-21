/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#c97b63',
        cream: '#f5efe7',
        olive: '#8a9a7a',
        gold: '#c9a86c',
        brown: '#5a3e2b',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}