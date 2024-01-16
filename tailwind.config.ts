import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: "#008CFF",
      orange: "#FF7C30",
      purple: "#392672",
      purpleLight: "#f7f5ff",
      proficientBg: "#E7FCF5",
      intermediateBg: "#FAFAF3",
      beginnerBg: "#F5F6F5",
      proficientBorder: "#4C7564",
      intermediateBorder: "#C5C830",
      beginnerBorder: "#838789",
      ghPurple: "#6e5494",
      lkdnBlue: "#0072b1",
      modalBackdrop: "rgba(0, 0, 0, 0.5)",
    },
  },
  plugins: [],
};
export default config
