<template>
    <article :class="styles.projectCard">
        <div :class="styles.thumbnail">
            <slot name="thumbnail" />
        </div>
        <div :class="styles.details">
            <div :class="styles.header">
                <ol :class="styles.tags">
                    <li
                        :class="styles.tag"
                        v-for="tag in project.tags"
                        :key="tag"
                    >
                        <Link
                            :href="'/projects/tag/' + tag"
                            :class="styles.link"
                            >{{ tag }}</Link
                        >
                    </li>
                </ol>
                <time
                    :class="styles.publishedDate"
                    :datetime="project.publishedDate"
                    >{{ publishDate }}</time
                >
            </div>
            <h3 :class="styles.title">
                <Link :class="styles.link" :href="project.url">{{
                    project.title
                }}</Link>
            </h3>
            <p :class="styles.description">{{ project.description }}</p>
        </div>
    </article>
</template>

<script lang="ts">
import Link from '@components/link.vue';
import { Project } from '@config/project';
import * as styles from './projectCard.css';
import { format, parseISO } from 'date-fns';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        Link
    },

    props: {
        project: {
            type: Object as PropType<Project>,
            default() {
                return [];
            }
        }
    },

    setup(props) {
        const { project } = props;
        const publishDate = format(
            parseISO(project.publishedDate),
            'do MMM, yyyy'
        );

        return { styles, publishDate };
    }
});
</script>
