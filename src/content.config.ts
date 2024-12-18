import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const jobDateRegexp = /[0-9]{4}-[0-9]{2}/;

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

const experience = defineCollection({
    loader: glob({ pattern: 'experience.json', base: './src/content' }),
    schema: z.array(
        z.object({
            startDate: z.string().regex(jobDateRegexp),
            endDate: z.nullable(z.string().regex(jobDateRegexp)),
            jobTitle: z.string(),
            company: z.object({
                name: z.string(),
                url: z.nullable(z.string().url())
            })
        })
    )
});

export const collections = {
    project,
    experience
};
