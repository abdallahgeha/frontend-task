/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#0b1872',
        mediumblue: '#1857b0',
        lightblue: '#2c86e0',
      },
    },
  },
  plugins: [],
}
