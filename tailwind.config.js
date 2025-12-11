/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cardstock: '#f5f3f0',
        'text-primary': '#1a1a1a',
        'text-secondary': '#4a4a4a',
        'text-tertiary': '#b5b5b5',
        accent: '#5f4b8b',
        'accent-light': '#7a6ba8',
        'badge-bg': '#cce6ff',
        'badge-text': '#0066cc',
        'nav-line': '#4a7c7e',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

