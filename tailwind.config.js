/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		fontFamily: {
			googlesansregular: ['Google Sans Display Regular', 'sans-serif'],
			googlesansbold: ['Google Sans Display Bold', 'sans-serif'],
			robotomono: ['Roboto Mono', 'monospace']
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				gdglight: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#4285f4',
					secondary: '#34a853',
					accent: '#f9ab00',
					neutral: '#212121',
					'neutral-content': '#fff',
					'base-100': '#f1f3f4',
					'base-content': '#212121',
					info: '#4285f4',
					success: '#34a853',
					warning: '#f9ab00',
					error: '#ea4335',
					'--rounded-btn': 'none'
				}
			},
			{
				gdgdark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#4285f4',
					secondary: '#34a853',
					accent: '#f9ab00',
					neutral: '#212121',
					'neutral-content': '#fff',
					'base-100': '#212121',
					'base-content': '#fff',
					info: '#4285f4',
					success: '#34a853',
					warning: '#f9ab00',
					error: '#ea4335',
					'--rounded-btn': 'none'
				}
			}
		]
	}
};
