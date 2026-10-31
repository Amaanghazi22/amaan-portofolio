/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
        prose: "760px",
      },
      screens: {
        xs: "320px",
        sml: "500px",
        mdl: "768px",
        lgl: "1024px",
      },
      colors: {
        ink: "#07080A",
        surface: "#0C0D10",
        line: "rgba(255, 255, 255, 0.07)",
        muted: "#9A9AA3",
        accent: "#22D3EE",
        violet: "#A78BFA",
        amber: "#FBBF24",
      },
      fontFamily: {
        bodyFont: ["Inter", "system-ui", "sans-serif"],
        titleFont: ["Space Grotesk", "Inter", "sans-serif"],
        monoFont: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        pulseDot: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
        shine: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
};
