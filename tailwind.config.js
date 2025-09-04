/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: '#e3e2d5',
          200: '#888883',
        },
        fontFamily: {
          body: ['Nunito']
        }
      },
      fontSize: {
        mammoth: '8rem',
      },
      // fontFamily: {
      //   body: ["Nunito"],
      // },
    },
  },
  plugins: [],
};