/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main Brand Colors
        'brand-green': '#43B765',
        'brand-green-dark': '#238B50',
        'brand-yellow': '#FFD447',
        'brand-orange': '#FF9638',
        'brand-coral': '#F05B52',
        'brand-blue': '#54B9E8',
        'brand-white': '#FFFFFF',
        'brand-dark': '#263238',
        'brand-bg': '#FFFDF7',

        // Semantic Colors
        'success': '#43B765',
        'warning': '#FFD447',
        'error': '#F05B52',
        'info': '#54B9E8',

        // Neutral Colors
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#EEEEEE',
        'neutral-300': '#E0E0E0',
        'neutral-400': '#BDBDBD',
        'neutral-500': '#9E9E9E',
        'neutral-600': '#757575',
        'neutral-700': '#616161',
        'neutral-800': '#424242',
        'neutral-900': '#263238',

        // Category Colors for Books/Games
        'cat-arabic': '#43B765',
        'cat-english': '#54B9E8',
        'cat-stories': '#F05B52',
        'cat-science': '#9B59B6',
        'cat-math': '#FF9638',
        'cat-moral': '#FFD447',
        'cat-activity': '#3498DB',
      },
      fontFamily: {
        // Display fonts for headings
        'display': ['"Nunito"', 'sans-serif'],

        // Body fonts - main
        'body': ['"Nunito"', 'sans-serif'],

        // Arabic fonts
        'arabic': ['"Cairo"', 'sans-serif'],
        'arabic-display': ['"Tajawal"', 'sans-serif'],

        // Fallback fonts
        'sans': ['"Nunito"', 'sans-serif'],
        'serif': ['"Nunito"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['2rem', { lineHeight: '1.3' }],
        'display-sm': ['1.5rem', { lineHeight: '1.4' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'progress': 'progress 1s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 10px rgba(67, 183, 101, 0.3)',
        'button-hover': '0 6px 15px rgba(67, 183, 101, 0.4)',
        'floating': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}