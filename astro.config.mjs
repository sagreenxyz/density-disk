import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://sagreenxyz.github.io',
	base: '/density-disk',
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	site: `https://astro.build`,
});
