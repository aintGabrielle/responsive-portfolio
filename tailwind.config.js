/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js, jsx}',
    './src/components/*.{js, jsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm' : '698px',
      'md' : '836px',
    }
  },
  plugins: [],
}

