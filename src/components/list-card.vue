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
                    <PhArrowSquareOut
                        :size="18"
                        :class="styles.externalIcon"
                        v-if="isExternal"
                    />
                    <span>{{ linkLabel }}</span>
                </NavLink>
            </div>
        </div>
    </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import TagList from './tag-list.vue';
import * as styles from './list-card.css.ts';
import NavLink from '@components/nav-link.vue';
import FormattedDate from './formatted-date.vue';
import { isExternalLink } from '@utilities/ref-link';
import { PhArrowSquareOut } from '@phosphor-icons/vue';

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

const isExternal = isExternalLink(url);

const ariaLabel = computed(() => {
    if (isExternal) {
        return `${linkLabel} (External link)`;
    }

    return linkLabel;
});
</script>
