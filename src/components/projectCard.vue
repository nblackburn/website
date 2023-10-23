<template>
    <article :class="styles.projectCard">
        <div :class="styles.thumbnail">
            <slot name="thumbnail" />
        </div>
        <div :class="styles.content">
            <div :class="styles.meta">
                <ol :class="styles.tags" aria-label="Tags">
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
                            :aria-current="activeTag === slugify(tag)"
                            >{{ tag }}</Link
                        >
                    </li>
                </ol>
                <div :class="styles.publishDate">
                    Published
                    <time :class="styles.publishedDate" :datetime="isoDate">{{
                        pubDate
                    }}</time>
                </div>
            </div>
            <div :class="styles.details">
                <div :class="styles.info">
                    <h3 :class="styles.title">
                        {{ project.data.title }}
                    </h3>
                    <p :class="styles.description">
                        {{ project.data.description }}
                    </p>
                </div>
                <NavLink
                    :href="project.data.url"
                    :class="styles.projectLink"
                    aria-label="View project (External link)"
                >
                    <svg
                        width="18"
                        height="18"
                        role="img"
                        :class="styles.externalIcon"
                    >
                        <use :href="'#external'" />
                    </svg>
                    <span>View project</span>
                </NavLink>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import Link from '@components/link.vue';
import slugify from '@utilities/slugify';
import * as styles from './projectCard.css';
import { format, formatISO } from 'date-fns';
import NavLink from '@components/navLink.vue';
import type { CollectionEntry } from 'astro:content';

export default defineComponent({
    components: {
        Link,
        NavLink
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
