/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gamebg': "url('/bg-game.png')",
          'homemobile': "url('/bg-home.png')",
          'homebig': "url('/bg-home-big.jpg')",
      },
      screens:{
        vs:'360px'
        
      },
    },
  },
  plugins: [],
}
