import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { RSSOptions } from '@astrojs/rss';

export async function GET(context: RSSOptions) {
    const posts = await getCollection('blog');

    return rss({
        title: 'Blog',
        description: 'A collection of procured thoughts.',
        site: `${context.site}/blog`,
        items: posts.map(({ id, data }) => {
            const post = {
                ...data,
                link: `/blog/${id}`,
                categories: data.tags
            };

            if (data.featuredImage) {
                post.enclosure = {
                    length: 0,
                    url: data.featuredImage.src,
                    type: `image/${data.featuredImage.format}`
                };
            }

            return post;
        })
    });
}
