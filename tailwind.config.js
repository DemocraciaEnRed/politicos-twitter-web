const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
	theme: {
		fontFamily: {
			'bowlby': ['Bowlby One', 'cursive'],
			'free': ['Free Sans', 'sans-serif'],
		},
		extend: {
			colors: {
        'pet-black': '#15202B',
				'pet-blue': '#0c4fec',
				'pet-gray': '#c8c8c8',
			},
		},
	},
};
