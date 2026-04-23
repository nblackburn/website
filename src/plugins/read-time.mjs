import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export const readTime = () => {
    return (tree, { data }) => {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage, { wordsPerMinute: 238 });

        data.astro.frontmatter.readTime = readingTime.text;
    };
};
