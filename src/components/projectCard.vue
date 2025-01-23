<template>
    <article :class="styles.projectCard">
        <div :class="styles.thumbnail">
            <slot name="thumbnail" />
        </div>
        <div :class="styles.content">
            <div :class="styles.meta">
                <TagList
                    :tags="project.data.tags"
                    :active="activeTag"
                    baseURL="/projects/tags"
                />
                <div :class="styles.publishDate">
                    <FormattedDate :date="project.data.pubDate" />
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

<script lang="ts" setup>
import * as styles from './projectCard.css';
import NavLink from '@components/navLink.vue';
import type { CollectionEntry } from 'astro:content';
import TagList from './tagList.vue';
import FormattedDate from './formattedDate.vue';

interface Props {
    project: CollectionEntry<'project'>;
    activeTag?: string;
}

const { project } = defineProps<Props>();
</script>