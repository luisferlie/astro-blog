// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jules Documentation',
			// logo configuration removed as text logo is not supported in 0.22.x
			social: {
				github: 'https://github.com/google/jules', // Placeholder actual repo
			},
			sidebar: [
				{
					label: 'User Guide',
					items: [
						{ label: 'Introduction', link: '/introduction/' },
						{ label: 'How to Use Jules', link: '/how-to-use/' },
						{ label: 'Capabilities and Limitations', link: '/capabilities-limitations/' },
						{ label: 'Contributing', link: '/contributing/' },
					],
				},
			],
		}),
	],
});
