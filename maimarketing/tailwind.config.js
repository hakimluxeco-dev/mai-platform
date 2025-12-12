/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f1729',
          card: '#1e293b', // Slightly lighter for cards
          blue: '#2563eb',
          cyan: '#06b6d4',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563eb, #06b6d4)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
