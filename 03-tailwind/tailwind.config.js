export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: { xs: '481px', sm: '769px', md: '1025px' }, // breakpoints exigidos
    extend: {
      boxShadow: { card: '0 6px 20px rgba(2,6,23,0.08)', cardDark: '0 6px 24px rgba(2,6,23,0.65)' },
      borderRadius: { xl: '12px' },
      transitionDuration: { 180: '180ms' }
    },
  },
  plugins: [],
}
