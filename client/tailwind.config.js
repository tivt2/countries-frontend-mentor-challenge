/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        break: '768px',
      },
      colors: {
        'base-100': 'hsl(0, 0%, 100%)',
        'base-200': 'hsl(0, 0%, 98%)',
        'base-300': 'hsl(0, 0%, 52%)',
        'base-400': 'hsl(209, 23%, 22%)',
        'base-500': 'hsl(207, 26%, 17%)',
        'base-600': 'hsl(200, 15%, 8%)',
      },
      padding: {
        'desktop-x': '5rem',
        'mobile-x': '1rem',
        'filter-y': '0.85rem',
        'filter-l': '1.6rem',
        'filter-r': '1rem',
        'filter-y-sub': '0.6rem',
      },
      gap: {
        'page-stats': '0.65rem',
      },
      boxShadow: {
        'nav-bar': '0 0 8px 0 rgba(0,0,0,0.1)',
        'country-card': '0 0 8px 0 rgba(0,0,0,0.1)',
        'search-field': '0 0 8px 0 rgba(0,0,0,0.1)',
        filter: '0 0 8px 0 rgba(0,0,0,0.1)',
        buttons: '0 0 5px 0 rgba(0,0,0,0.3)',
        flag: '0 0 10px 0 rgba(0,0,0,0.1)',
      },
      fontSize: {
        'country-name': '1.2rem',
        'country-stat': '0.85rem',
        'filter-sub': '0.55rem',
        filter: '0.78rem',
        search: '0.78rem',
        buttons: '0.72rem',
      },
      maxWidth: {
        search: '29.3rem',
        filter: '13rem',
        card: '16rem',
        'card-break': '20rem',
      },
      borderRadius: {
        mobile: '0.35rem',
        buttons: '0.15rem',
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(16rem, 1fr))',
      },
      keyframes: {
        'blur-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        'blur-in': 'blur-in 150ms ease-in both',
      },
    },
  },
  plugins: [],
};
