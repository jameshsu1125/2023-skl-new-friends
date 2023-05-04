/* eslint-disable import/no-extraneous-dependencies */
const color = require('tailwindcss/colors');
const { fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		container: { screen: {} },
		fontSize: {
			...fontSize,
		},
		colors: {
			...color,
			primary: '#E60012',
			secondary: '#FED27B',
			tertiary: '#C7241E',
			quaternary: '#00ff00',
			backgroundColor: '#fff',
			secondaryBackground: '#f5f5f5',
			textColor: '#111',
		},
	},
	plugins: [],
};
