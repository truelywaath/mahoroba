/** @type {import('tailwindcss').Config} */

const customColors = {
  mahoroba: {
    50: '#0A5137',
    100: '#0E6445',
    200: '#137752',
    300: '#18895F',
    400: '#1D9A6C',
    500: '#3FAC84',
    600: '#62BE9C',
    700: '#86CEB4',
    800: '#AADECB',
    900: '#CFEDE2',
    DEFAULT: '#ff6a5c',
  },
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#056571',
          100: '#f9f9f9',
          200: '#535353',
          300: '#FF6A5C',
          400: '#ffffff',
          500: '#535353',
          600: '#535353',
          700: '#86CEB4',
          800: '#AADECB',
          900: '#CFEDE2',
          DEFAULT: '#3FAC84',
        }
      },
    },
  },
  plugins: [],
}

