import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Flotes Documentation',
      logo: {
        replacesTitle: true,
        dark: './src/assets/logo-dark-1.svg',
        light: './src/assets/logo-light-1.svg',
      },
			social: {
				github: 'https://github.com/everduin94',
        discord: 'https://discord.gg/qKaKeGT8sZ'
			},
			sidebar: [
        {
					label: 'Getting Started',
          autogenerate: { directory: 'getting-started' }
				},
				{
					label: 'Guides',
          items: [
            { label: 'Notebooks', link: '/guides/notebooks'},
            { label: 'Notes', link: '/guides/notes'},
            { label: 'Study', link: '/guides/study'},
            { label: 'Stats', link: '/guides/stats'},
            { label: 'Spaced Repetition', link: '/guides/spaced-repetition'},
            { label: 'Archives', link: '/guides/archives'},
            { label: 'Sharing', link: '/guides/sharing'},
            { label: 'Tags', link: '/guides/tags'},
            { label: 'Resources', link: '/guides/resources'},
          ]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
