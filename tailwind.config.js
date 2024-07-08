/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-custom-800': '#633CFF',
        'purple-custom-500': '#BEADFF',
        'purple-custom-100': '#EFEBFF',
        'black-custom': '#333333',

        'grey-custom-800': '#737373',
        'grey-custom-500': '#D9D9D9',
        'grey-custom-100': '#FAFAFA',

        'red-custom': '#FF3939'
      }
    },
  },
  plugins: [],
}

