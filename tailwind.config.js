/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      boxShadow: {
        custom_shadow: ' 0 0 20px rgba(222,223,225)'
      }
    },
  },
  plugins: [],
}

