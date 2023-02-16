<template>
    <article :class="styles.projectCard">
        <div :class="styles.thumbnail">
            <slot name="thumbnail" />
        </div>
        <div :class="styles.details">
            <div :class="styles.header">
                <ol :class="styles.tags">
                    <li
                        v-for="tag in project.data.tags"
                        :class="[
                            styles.tag,
                            activeTag === slugify(tag) ? styles.activeTag : ''
                        ]"
                        :key="tag"
                    >
                        <Link
                            :href="'/projects/tags/' + slugify(tag)"
                            :class="styles.link"
                            >{{ tag }}</Link
                        >
                    </li>
                </ol>
                <time :class="styles.publishedDate" :datetime="isoDate">{{
                    pubDate
                }}</time>
            </div>
            <h3 :class="styles.title">
                <Link :class="styles.link" :href="project.data.url">{{
                    project.data.title
                }}</Link>
            </h3>
            <p :class="styles.description">{{ project.data.description }}</p>
        </div>
    </article>
</template>

<script lang="ts">
import { format, formatISO } from 'date-fns';
import Link from '@components/link.vue';
import slugify from '@utilities/slugify';
import * as styles from './projectCard.css';
import { defineComponent, PropType } from 'vue';
import type { CollectionEntry } from 'astro:content';

export default defineComponent({
    components: {
        Link
    },

    props: {
        project: {
            type: Object as PropType<CollectionEntry<'project'>>,
            default() {
                return [];
            }
        },

        activeTag: {
            type: String
        }
    },

    setup(props) {
        const { project } = props;
        const isoDate = formatISO(project.data.pubDate);
        const pubDate = format(project.data.pubDate, 'do MMM, yyyy');

        return { styles, pubDate, isoDate, slugify };
    }
});
</script>
