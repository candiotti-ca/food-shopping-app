import { appTheme } from './theme';
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: {
				custom: [
					appTheme
				]
			}
		})
	]
};

module.exports = config;
