import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e9edff",
          200: "#cdd6ff",
          300: "#a9b5ff",
          400: "#7b8bff",
          500: "#5366ff",
          600: "#3a4bdb",
          700: "#2e3ab0",
          800: "#27348f",
          900: "#232c74"
        }
      }
    }
  },
  plugins: []
} satisfies Config
