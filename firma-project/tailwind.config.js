/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}",
	],
	theme: {
		extend: {
		  colors: {
			  primary: '#4191BD',
			  secondary: '#FEE699',
			  borderColor: '#C07F00',
			  textstandard: '#3C1C00',
			  webBackground: '#FFFDF5',
			  webBackground2: '#FFF1E4',
			  webBackground3: '#FFF5E0'
		  },
		  fontFamily: {
			  body: ['Figtree']
		  }
		},
	  },
  	plugins: [],
}

