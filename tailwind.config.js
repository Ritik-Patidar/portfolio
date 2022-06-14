module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: "#1E2225",
        primaryLight: "#f4f8fc",
        secondary: "#282C2F",
        primaryText: "#f4f8fc",
        primaryTextDark: "#1E2225",
        color1: "#C2508B",
        color2: "#F57DBA",
        color3: "#5E4DAB",
        color4: "#974EC2",
        particlePrimary: "#212529",
      },
      fontSize: {
        xxs: ['10px', '12px'],
      }
    },
  },
  plugins: [],
}