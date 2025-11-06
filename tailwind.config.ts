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
          50: "#fff5eb",
          100: "#ffe3c5",
          200: "#ffc389",
          300: "#ff9c4d",
          400: "#ff7a26",
          500: "#f56111",
          600: "#d4510c",
          700: "#a9440f",
          800: "#7c3411",
          900: "#4b1f0c"
        },
        surface: {
          900: "#0f1012",
          800: "#16181c",
          700: "#1f2126",
          600: "#292c33"
        }
      }
    }
  },
  plugins: []
} satisfies Config
