
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const appTheme: CustomThemeConfig = {
	name: 'app-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #5A7302 
		"--color-primary-50": "230 234 217", // #e6ead9
		"--color-primary-100": "222 227 204", // #dee3cc
		"--color-primary-200": "214 220 192", // #d6dcc0
		"--color-primary-300": "189 199 154", // #bdc79a
		"--color-primary-400": "140 157 78", // #8c9d4e
		"--color-primary-500": "90 115 2", // #5A7302
		"--color-primary-600": "81 104 2", // #516802
		"--color-primary-700": "68 86 2", // #445602
		"--color-primary-800": "54 69 1", // #364501
		"--color-primary-900": "44 56 1", // #2c3801
		// secondary | #F2B705 
		"--color-secondary-50": "253 244 218", // #fdf4da
		"--color-secondary-100": "252 241 205", // #fcf1cd
		"--color-secondary-200": "252 237 193", // #fcedc1
		"--color-secondary-300": "250 226 155", // #fae29b
		"--color-secondary-400": "246 205 80", // #f6cd50
		"--color-secondary-500": "242 183 5", // #F2B705
		"--color-secondary-600": "218 165 5", // #daa505
		"--color-secondary-700": "182 137 4", // #b68904
		"--color-secondary-800": "145 110 3", // #916e03
		"--color-secondary-900": "119 90 2", // #775a02
		// tertiary | #ffffff 
		"--color-tertiary-50": "255 255 255", // #ffffff
		"--color-tertiary-100": "255 255 255", // #ffffff
		"--color-tertiary-200": "255 255 255", // #ffffff
		"--color-tertiary-300": "255 255 255", // #ffffff
		"--color-tertiary-400": "255 255 255", // #ffffff
		"--color-tertiary-500": "255 255 255", // #ffffff
		"--color-tertiary-600": "230 230 230", // #e6e6e6
		"--color-tertiary-700": "191 191 191", // #bfbfbf
		"--color-tertiary-800": "153 153 153", // #999999
		"--color-tertiary-900": "125 125 125", // #7d7d7d
		// success | #93A603 
		"--color-success-50": "239 242 217", // #eff2d9
		"--color-success-100": "233 237 205", // #e9edcd
		"--color-success-200": "228 233 192", // #e4e9c0
		"--color-success-300": "212 219 154", // #d4db9a
		"--color-success-400": "179 193 79", // #b3c14f
		"--color-success-500": "147 166 3", // #93A603
		"--color-success-600": "132 149 3", // #849503
		"--color-success-700": "110 125 2", // #6e7d02
		"--color-success-800": "88 100 2", // #586402
		"--color-success-900": "72 81 1", // #485101
		// warning | #734B02 
		"--color-warning-50": "234 228 217", // #eae4d9
		"--color-warning-100": "227 219 204", // #e3dbcc
		"--color-warning-200": "220 210 192", // #dcd2c0
		"--color-warning-300": "199 183 154", // #c7b79a
		"--color-warning-400": "157 129 78", // #9d814e
		"--color-warning-500": "115 75 2", // #734B02
		"--color-warning-600": "104 68 2", // #684402
		"--color-warning-700": "86 56 2", // #563802
		"--color-warning-800": "69 45 1", // #452d01
		"--color-warning-900": "56 37 1", // #382501
		// error | #D95204 
		"--color-error-50": "249 229 217", // #f9e5d9
		"--color-error-100": "247 220 205", // #f7dccd
		"--color-error-200": "246 212 192", // #f6d4c0
		"--color-error-300": "240 186 155", // #f0ba9b
		"--color-error-400": "228 134 79", // #e4864f
		"--color-error-500": "217 82 4", // #D95204
		"--color-error-600": "195 74 4", // #c34a04
		"--color-error-700": "163 62 3", // #a33e03
		"--color-error-800": "130 49 2", // #823102
		"--color-error-900": "106 40 2", // #6a2802
		// surface | #576782 
		"--color-surface-50": "230 232 236", // #e6e8ec
		"--color-surface-100": "221 225 230", // #dde1e6
		"--color-surface-200": "213 217 224", // #d5d9e0
		"--color-surface-300": "188 194 205", // #bcc2cd
		"--color-surface-400": "137 149 168", // #8995a8
		"--color-surface-500": "87 103 130", // #576782
		"--color-surface-600": "78 93 117", // #4e5d75
		"--color-surface-700": "65 77 98", // #414d62
		"--color-surface-800": "52 62 78", // #343e4e
		"--color-surface-900": "43 50 64", // #2b3240

	}
}