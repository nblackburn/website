import { isSameDay, isAfter } from 'date-fns';
import { CollectionEntry } from 'astro:content';

export default (projects: CollectionEntry<'project'>[]) => {
    return projects.sort((a, b) => {
        if (isSameDay(a.data.pubDate, b.data.pubDate)) {
            return 0;
        }

        return isAfter(a.data.pubDate, b.data.pubDate) ? -1 : 1;
    });
};
