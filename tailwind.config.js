/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // adjust to your project
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          'deep-black': '#0A0A23',    // Main dark background
          'neon-pink': '#D900FF',     // Main bright pink
          'electric-purple': '#9A00FF', // Mid-gradient purple
          'neon-blue': '#00F0FF',     // Bright blue
          'aqua-cyan': '#00FFE5',     // Accent hover cyan
          'light-text': '#E0E0E0',    // For paragraph/body text
          'white-glass': 'rgba(255, 255, 255, 0.05)', // Glassmorphism
        },
      },
    },
  },
  plugins: [],
}