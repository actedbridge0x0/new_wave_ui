module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'teal-img': "url('./src/assets/images/bgteal.jpg')",
        'dark-blue-img': "url('./src/assets/images/bgdarkblue.jpg')",
        'light-blue-img': "url('./src/assets/images/bglightblue.jpg')",
        'mid-blue-img': "url('./src/assets/images/bgmidblue.jpg')",
        'purple-img': "url('./src/assets/images/bgpurple.jpg')",
        'background1-img': "url('./src/assets/images/background1.jpg')",
        'background2-img': "url('./src/assets/images/background2.jpg')",
        'banner1-img': "url('./src/assets/images/banner1.jpg')",
      },
      colors: {
        'logo-pink': '#D8075F',
        'logo-light-blue': '#33CAFF',
        'logo-mid-blue': '#1F2A47',
        'logo-dark-blue': '#181D2E',
        'logo-teal': '#31F5FF',
      }
    },
    fontFamily: {
      'script': ['Lobster', 'cursive']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
