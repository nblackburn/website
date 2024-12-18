import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const project = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            url: z.string().url(),
            thumbnail: image(),
            description: z.string(),
            tags: z.array(z.string())
        })
});

const stack = defineCollection({
    loader: glob({ pattern: 'stack.json', base: './src/content' }),
    schema: z.array(
        z.object({
            title: z.string(),
            href: z.string().url(),
            type: z.enum(['music', 'tools', 'development', 'design'])
        })
    )
});

export const collections = {
    stack,
    project
};
