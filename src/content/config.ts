import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
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

export const collections = {
    project: projectCollection
};
