// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://template.enterprises', // Cambia esto por tu dominio real
	integrations: [sitemap()],
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
});
