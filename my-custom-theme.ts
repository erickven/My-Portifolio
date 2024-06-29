
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
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
		// primary | #660063 
		"--color-primary-50": "232 217 232", // #e8d9e8
		"--color-primary-100": "224 204 224", // #e0cce0
		"--color-primary-200": "217 191 216", // #d9bfd8
		"--color-primary-300": "194 153 193", // #c299c1
		"--color-primary-400": "148 77 146", // #944d92
		"--color-primary-500": "102 0 99", // #660063
		"--color-primary-600": "92 0 89", // #5c0059
		"--color-primary-700": "77 0 74", // #4d004a
		"--color-primary-800": "61 0 59", // #3d003b
		"--color-primary-900": "50 0 49", // #320031
		// secondary | #c002a7 
		"--color-secondary-50": "246 217 242", // #f6d9f2
		"--color-secondary-100": "242 204 237", // #f2cced
		"--color-secondary-200": "239 192 233", // #efc0e9
		"--color-secondary-300": "230 154 220", // #e69adc
		"--color-secondary-400": "211 78 193", // #d34ec1
		"--color-secondary-500": "192 2 167", // #c002a7
		"--color-secondary-600": "173 2 150", // #ad0296
		"--color-secondary-700": "144 2 125", // #90027d
		"--color-secondary-800": "115 1 100", // #730164
		"--color-secondary-900": "94 1 82", // #5e0152
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #292d38 
		"--color-surface-50": "223 224 225", // #dfe0e1
		"--color-surface-100": "212 213 215", // #d4d5d7
		"--color-surface-200": "202 203 205", // #cacbcd
		"--color-surface-300": "169 171 175", // #a9abaf
		"--color-surface-400": "105 108 116", // #696c74
		"--color-surface-500": "41 45 56", // #292d38
		"--color-surface-600": "37 41 50", // #252932
		"--color-surface-700": "31 34 42", // #1f222a
		"--color-surface-800": "25 27 34", // #191b22
		"--color-surface-900": "20 22 27", // #14161b
		
	}
}