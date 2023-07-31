/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./apps/portal-client/**/*.{ts,tsx}",
    "./libs/components/**/*.{ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)"
      }
    },
  },
  plugins: [],
}