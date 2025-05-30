import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const project = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/project' }),
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

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.date(),
            featuredImage: image(),
            tags: z.array(z.string())
        })
});

export const collections = {
    blog,
    project
};
