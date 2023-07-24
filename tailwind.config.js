/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(3, 13, 42)',
        'background': 'rgb(234, 238, 253)',
        'bluegray': '#d0dafb',
        'primary': 'rgb(247, 226, 156)',
        'secondary': 'rgb(233, 250, 189)',
        'accent': 'rgb(87, 97, 133)',
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
