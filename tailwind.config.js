/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#e0e6ed",
        foreground: "#1c3d5a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1c3d5a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1c3d5a",
        },
        primary: {
          DEFAULT: "#35abae",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1c3d5a",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ff6b6b",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#6ee7b7", 
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#e0e6ed",
          foreground: "#1c3d5a",
        },
        text: {
			DEFAULT: "#1c3d5a", 
			muted: "#808080",
		},
        border: "#1c3d5a",
        input: "#e0e6ed",
        ring: "#6ee7b7",
        chart: {
          1: "#35abae", 
          2: "#1c3d5a",
          3: "#ff6b6b",
          4: "#6ee7b7",
          5: "#e0e6ed",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
