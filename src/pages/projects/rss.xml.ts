import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { RSSOptions } from '@astrojs/rss';

export async function GET(context: RSSOptions) {
    const projects = await getCollection('project');

    return rss({
        title: 'Projects',
        description: 'Some of the things i have worked on',
        site: `${context.site}/projects`,
        items: projects.map(({ data }) => ({
            ...data,
            link: data.url,
            categories: data.tags
        }))
    });
}
