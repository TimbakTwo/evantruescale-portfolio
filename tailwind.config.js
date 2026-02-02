/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}"
	],
	darkMode: ["class", "class"],
	theme: {
    	extend: {
    		colors: {
    			'brand-light': '#FBF8F3',
    			'brand-dark': '#232332',
    			'brand-purple': '#7928CA',
    			'brand-pink': '#FF0080',
    			'blue-lighter': '#71c5ee',
    			'blue-light': '#3182ce',
    			'blue-normal': '#025091',
    			'card-dark': 'rgba(255, 255, 255, 0.04)',
    			'card-light': 'rgba(255, 255, 255, 0.80)',
    			'badge-dark': 'rgba(226, 232, 240, 0.16)',
    			'badge-light': '#F8F0E3',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		transitionTimingFunction: {
    			'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    			'out-back': 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'
    		},
    		transitionDuration: {
    			DEFAULT: '300ms'
    		},
    		backgroundImage: {
    			inherited: 'inherit'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".flex-center": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}
			});
		},
        require("tailwindcss-animate")
    ]
};
