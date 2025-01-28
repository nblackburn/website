<template>
    <article :class="styles.listCard">
        <div :class="styles.thumbnail">
            <slot name="thumbnail" />
        </div>
        <div :class="styles.content">
            <div :class="styles.meta">
                <TagList :tags="tags" :active="activeTag" :baseURL="baseURL" />
                <div :class="styles.publishDate">
                    <FormattedDate :date="createdAt" />
                </div>
            </div>
            <div :class="styles.details">
                <div :class="styles.info">
                    <h3 :class="styles.title">
                        {{ title }}
                    </h3>
                    <p :class="styles.description" v-if="description">
                        {{ description }}
                    </p>
                </div>
                <NavLink
                    :href="url"
                    :class="styles.projectLink"
                    :aria-label="ariaLabel"
                >
                    <svg
                        width="18"
                        height="18"
                        role="img"
                        :class="styles.externalIcon"
                        v-if="isExternalLink(url)"
                    >
                        <use :href="'#external'" />
                    </svg>
                    <span>{{ linkLabel }}</span>
                </NavLink>
            </div>
        </div>
    </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import TagList from './tagList.vue';
import * as styles from './listCard.css';
import NavLink from '@components/navLink.vue';
import FormattedDate from './formattedDate.vue';
import { isExternalLink } from '@utilities/refLink';

interface Props {
    title: string;
    description?: string;
    url: string;
    tags: string[];
    createdAt: Date;
    baseURL: string;
    activeTag?: string;
    linkLabel?: string;
}

const { url, createdAt, linkLabel, baseURL } = withDefaults(
    defineProps<Props>(),
    {
        linkLabel: 'View',
        tags: () => []
    }
);

const ariaLabel = computed(() => {
    if (isExternalLink(url)) {
        return `${linkLabel} (External link)`;
    }

    return linkLabel;
});
</script>
