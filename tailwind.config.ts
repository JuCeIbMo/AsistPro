import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', 'sans-serif'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "20px",
				lg: "80px",
			},
			screens: {
				sm: "375px",
				md: "768px",
				lg: "1200px",
			},
		},
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		extend: {
			colors: {
				primary: {
					blue: {
						DEFAULT: '#2563eb',
						50: '#eff6ff',
						100: '#dbeafe',
						200: '#bfdbfe',
						300: '#93c5fd',
						400: '#60a5fa',
						500: '#3b82f6',
						600: '#2563eb',
						700: '#1d4ed8',
						800: '#1e40af',
						900: '#1e3a8a',
					},
					orange: {
						DEFAULT: '#f97316',
						50: '#fff7ed',
						100: '#ffedd5',
						200: '#fed7aa',
						300: '#fdba74',
						400: '#fb923c',
						500: '#f97316',
						600: '#ea580c',
						700: '#c2410c',
						800: '#9a3412',
						900: '#7c2d12',
					}
				}
			},
		},
	},
	plugins: [],
};
export default config;
