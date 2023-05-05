/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
        check: {
          500: '#39d353',
          600: '#26a641',
          700: '#006d32',
          800: '#0e4429',
          900: '#161b22'
        }
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    }
  },
  plugins: []
}
