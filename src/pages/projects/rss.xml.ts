import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
    const projects = await getCollection('project');

    return rss({
        title: 'Projects',
        description: 'Some of the things i have worked on',
        site: `${context.site}/projects`,
        items: projects.map((project) => ({
            ...project.data,
            link: project.data.url
        }))
    });
}
