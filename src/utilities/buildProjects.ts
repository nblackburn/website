import slugify from '@utilities/slugify';
import { Project } from '@config/project';

export type ProjectPage = {
    url: string;
    slug: string;
    title: string;
    tags: string[];
    description: string;
    publishedDate: string;
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
            if (a.publishedDate === b.publishedDate) {
                return 0;
            }

            return a.publishedDate < b.publishedDate ? 1 : -1;
        });
};
