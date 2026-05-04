import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan ini buat jaga-jaga
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ini kunci utamanya supaya Glacial Indifference jalan
        sans: ["var(--font-glacial)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;