import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FD5A47",
        secondary: "#FEC701",
        accent: "#66F6FD",
        base: "#F9F2E2",
        baseBlack: "#18181B",
        baseWhite: "#FAFAFA",

        bru: {
          sunset: "#FD5A47",
          glow: "#FEC701",
          lemon: "#F2F21C",
          aqua: "#66F6FD",
          candy: "#FC7DA8",
          ocean: "#0F78C3",
          neon: "#2DFE2D",
          grass: "#0FAA58",
          magenta: "#E01DFF",
          violet: "#472982",
          lavender: "#4C6B9F",
          cream: "#F9F2E2",
          black: "#18181B",
          white: "#FAFAFA",
        },
      },
      boxShadow: {
        "bru-right": "4px 4px 0px 0px rgba(0, 0, 0, 1)",
        "bru-right-sm": "2px 2px 0px 0px rgba(0, 0, 0, 1)",
        "bru-right-xl": "8px 8px 0px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
