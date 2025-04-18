
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cosmic: {
					DEFAULT: '#8A2BE2',
					50: '#E5D9F9',
					100: '#D5C1F6',
					200: '#B691F0',
					300: '#9661E9',
					400: '#7732E3',
					500: '#5714C5',
					600: '#42109A',
					700: '#2E0C6E',
					800: '#1A0742',
					900: '#060316',
				},
				starlight: {
					DEFAULT: '#FFD700',
					50: '#FFF9E5',
					100: '#FFF5CC',
					200: '#FFEC99',
					300: '#FFE466',
					400: '#FFDB33',
					500: '#FFD700',
					600: '#CCA900',
					700: '#997F00',
					800: '#665400',
					900: '#332A00',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif'],
				mystic: ['Cinzel', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				twinkle: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 15s ease infinite',
			},
			backgroundImage: {
				'cosmic-gradient': 'linear-gradient(to bottom right, #1A0742, #42109A, #5714C5)',
				'starfield': 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0.5px, transparent 1px), radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0.25px, transparent 0.5px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
