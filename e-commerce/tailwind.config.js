/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px'},
      'Ig': {'max': '991px'},
      'md': {'max': '7671px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '357px'}

    }
  },
  plugins: [],
}

