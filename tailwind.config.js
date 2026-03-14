/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#0A0A0B",
        textLight: "#F8F8F8",
        textDark: "#A0A0A0",
        cyanAccent: "#22D3EE",
        fuchsiaAccent: "#D946EF",
        glass: "rgba(255, 255, 255, 0.03)",
        borderColor: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
        titleFont: ["Space Grotesk", "sans-serif"],
        monoFont: ["Geist Mono", "monospace"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
        "accent-glow": "0 0 40px rgba(34, 211, 238, 0.15)",
        "premium-card": "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.12) 0%, transparent 60%)",
        "text-gradient": "linear-gradient(to right, #22D3EE, #F8F8F8, #D946EF)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
