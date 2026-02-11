/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#e94560',
      light: '#eaeaea',
      'gray-700': '#374151',
      'gray-400': '#9ca3af',
      'gray-900': '#111827',
      'red-600': '#dc2626',
      'red-900': '#7c2d12',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
