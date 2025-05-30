import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Jules Documentation',
            social: {
                github: 'https://github.com/example/jules', // Replace with actual link if available
            },
            sidebar: [
                {
                    label: 'Overview',
                    items: [
                        { label: 'Introduction', link: '/introduction/' },
                        { label: 'How to Use Jules', link: '/how-to-use/' },
                    ],
                },
                {
                    label: 'Reference',
                    items: [
                        { label: 'Capabilities and Limitations', link: '/capabilities-limitations/' },
                        { label: 'Contributing', link: '/contributing/' },
                    ],
                },
            ],
            // Ensure no custom content collections or schema paths are defined here
            // if not supported or needed by Starlight 0.22.0
        }),
    ],
    // If site deployment is planned for a subpath, e.g. example.com/docs/
    // site: 'https://example.com/docs', // Replace with actual URL
});
