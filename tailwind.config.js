/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFFFF',
        'text-primary': '#1F2937',
        'accent': '#3B82F6',
        'border-primary': '#D1D5DB',
        'placeholder-primary': '#9CA3AF',
        'button-text': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
