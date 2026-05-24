import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.enum(['ESP32', 'SFF PCs', 'Cyberdecks', '3D Printing', 'Builds']),
		heroImage: z.string().optional(),
		amazonLink: z.string().optional(),
		tags: z.array(z.string()).optional(),
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
		asin: z.string().optional(),
	}),
});

const builds = defineCollection({
	loader: glob({ base: './src/content/builds', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		partsList: z.array(z.object({
			name: z.string(),
			link: z.string(),
		})).optional(),
	}),
});

const tools = defineCollection({
	loader: glob({ base: './src/content/tools', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		link: z.string(),
		category: z.string().optional(),
	}),
});

export const collections = { blog, gear, builds, tools };
