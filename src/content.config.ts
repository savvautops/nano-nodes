import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const tutorials = defineCollection({
	// Load Markdown and MDX files in the `src/content/tutorials/` directory.
	loader: glob({ base: './src/content/tutorials', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
	}),
});

const gear = defineCollection({
	loader: glob({ base: './src/content/gear', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		price: z.string(),
		affiliateLink: z.string(),
		heroImage: z.string(),
	}),
});

export const collections = { tutorials, gear };