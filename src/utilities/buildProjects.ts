import slugify from '@utilities/slugify';
import { Project } from '@config/project';

export type ProjectPage = {
    url: string;
    slug: string;
    title: string;
    tags: string[];
    description: string;
    pubDate: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (pages: Record<string, any>[]): Project[] => {
    return pages
        .map((project) => {
            const frontmatter = project.frontmatter;
            const tags = frontmatter.tags.map((tag: string) => {
                const slug = slugify(tag);

                return { name: tag, slug, url: `/projects/tags/${slug}` };
            });

            return { ...frontmatter, tags };
        })
        .sort((a, b) => {
            if (a.pubDate === b.pubDate) {
                return 0;
            }

            return a.pubDate < b.pubDate ? 1 : -1;
        });
};
