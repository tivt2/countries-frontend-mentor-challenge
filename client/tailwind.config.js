/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-100': 'hsl(0, 0%, 100%)',
        'base-200': 'hsl(0, 0%, 98%)',
        'base-300': 'hsl(0, 0%, 52%)',
        'base-400': 'hsl(209, 23%, 22%)',
        'base-500': 'hsl(207, 26%, 17%)',
        'base-600': 'hsl(200, 15%, 8%)',
      },
    },
  },
  plugins: [],
};
