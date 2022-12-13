import rss from '@astrojs/rss';
import config from '@app/config';
import { parseISO } from 'date-fns';
import buildProjects from '@utilities/buildProjects';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GlobImport = Record<string, Record<string, any>>;

export const getProjects = async () => {
    const globImport: GlobImport = import.meta.glob('./*.md', { eager: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pages: Record<string, any>[] = Object.values(globImport);

    return buildProjects(pages);
};

export const get = async () => {
    const projects = await getProjects();
    const projectsURL = `${config.url}/projects`;

    return rss({
        title: 'Projects',
        site: projectsURL,
        description: 'Some of the things i have worked on',
        items: projects.map((project) => {
            const publishedDate = parseISO(project.publishedDate);

            return {
                link: project.url,
                pubDate: publishedDate,
                title: project.title,
                description: project.description
            };
        })
    });
};
