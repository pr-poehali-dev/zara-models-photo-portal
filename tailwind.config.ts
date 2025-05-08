
import { type Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        model: {
          primary: "#9b87f5", // Основной цвет бренда
          secondary: "#E5DEFF", // Светлый фоновый цвет
          accent: "#7E69AB", // Акцентный цвет для выделений
          dark: "#1A1F2C", // Темный цвет для фона и текста
          light: "#D6BCFA", // Светлый оттенок основного цвета
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
