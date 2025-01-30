import rss from '@astrojs/rss';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { getCollection } from 'astro:content';
import type { RSSOptions } from '@astrojs/rss';

export async function GET(context: RSSOptions) {
    const parser = new MarkdownIt();
    const posts = await getCollection('blog');

    return rss({
        title: 'Blog',
        description: 'A collection of procured thoughts.',
        site: `${context.site}/blog`,
        items: posts.map(({ id, data, body }) => {
            const post = {
                ...data,
                link: `/blog/${id}`,
                categories: data.tags
            };

            if (body) {
                post.content = sanitizeHtml(parser.render(body));
            }

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
