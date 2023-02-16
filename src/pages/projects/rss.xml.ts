import config from '@app/config';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export const get = async () => {
    const projectsURL = `${config.url}/projects`;

    return rss({
        title: 'Projects',
        site: projectsURL,
        description: 'Some of the things i have worked on',
        items: await pagesGlobToRssItems(import.meta.glob('./*.md'))
    });
};
