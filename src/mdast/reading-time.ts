import getReadingTime from "reading-time";
import { defineMdastPlugin } from "satteri";

export const readTime = defineMdastPlugin({
  name: "read-time",
  after(root, context) {
    const textOnPage = context.textContent(root);
    const readingTime = getReadingTime(textOnPage, { wordsPerMinute: 238 });

    if (context.data.astro !== undefined) {
        context.data.astro.frontmatter.readTime = readingTime.text;
    }
  },
});