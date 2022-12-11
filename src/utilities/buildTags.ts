import slugify from '@utilities/slugify';
import buildProjects from '@utilities/buildProjects';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (pages: Record<string, any>[]) => {
    const uniqueTags: string[] = [];
    const projects = buildProjects(pages);

    projects.forEach(({ tags }) => {
        tags.forEach((tag) => {
            if (!uniqueTags.includes(tag.slug)) {
                uniqueTags.push(tag.slug);
            }
        });
    });

    return uniqueTags.map((tag: string) => {
        const name = tag;
        const slug = slugify(tag);
        const url = `/projects/tags/${slug}`;
        const items = projects.filter((project) => {
            const projectTags = project.tags.map((tag) => tag.slug);

            return projectTags.includes(tag);
        });

        return {
            url,
            name,
            slug,
            items
        };
    });
};
