import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        url: z.string().url(),
        thumbnail: z.string(),
        description: z.string(),
        tags: z.array(z.string())
    })
});

export const collections = {
    project: projectCollection
};
