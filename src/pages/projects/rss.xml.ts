import rss from '@astrojs/rss';
import config from '@app/config';
import { parseISO } from 'date-fns';
import { Project } from '@config/project';
import type { MarkdownInstance } from 'astro';

const importedProjects = import.meta.glob<MarkdownInstance<Project>>('./*.md', {
    eager: true
});

export const get = () => {
    const projectsURL = `${config.url}/projects`;
    const projects = Object.values(importedProjects);

    return rss({
        title: 'Projects',
        site: projectsURL,
        description: 'Some of the things i have worked on',
        items: projects.map((project) => {
            const frontmatter = project.frontmatter;
            const publishedDate = parseISO(frontmatter.publishedDate);

            return {
                link: frontmatter.url,
                pubDate: publishedDate,
                title: frontmatter.title,
                description: frontmatter.description
            };
        })
    });
};
