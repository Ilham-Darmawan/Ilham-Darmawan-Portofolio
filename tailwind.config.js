/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        costumGray: '#2C2C2C',
        costumYellow: '#FBB835',
        costumGray2: '#313131'
      },
      padding: {
        persent_5: '5%',
        persent_2: '2%',
        persent_35: '35%'
      },
      margin: {
        persent_5: '5%',
        persent_2: '2%',
        persent_10: '10%',
        persent_20: '20%',
        persent_50: '50%'
      },
      backgroundColor: {
        GraytoYellow: 'background: linear-gradient(to right, rgb(44,44,44) 0%, rgb(44,44,44) 30%, rgb(251,184,53) 30%, rgb(251,184,53) 100%);'
      },
      backgroundImage: {
        project1Img: "url('./component/homepage/project-1-img.jpg')",
        mossaic: "url('./component/homepage/mossaic.jpg')"
      },
      flex: {
        half: '50%'
      },
      screens: {
        'tablet': { 'max': '640px' },
        // => @media (max-width: 640px) { ... }

        'laptop': { 'max': '1024px' },
        // => @media (max-width: 1024px) { ... }

        'desktop': { 'max': '1280px' },
        // => @media (max-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
