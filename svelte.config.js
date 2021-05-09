import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
// const preprocess = require("svelte-preprocess");
//const adapter = require("@sveltejs/adapter-static")

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
	}
};
export default config;