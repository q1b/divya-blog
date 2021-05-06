const preprocess = require("svelte-preprocess");
const netlify = require('@sveltejs/adapter-netlify')
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
