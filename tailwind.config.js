/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unicoc-red': '#DC143C',
        'unicoc-red-dark': '#B22222',
        'unicoc-red-light': '#FF6B6B',
        'text-dark': '#1F2937',
        'text-light': '#6B7280',
        'bg-light': '#F9FAFB',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
