<template>
    <nav :class="styles.pagination">
        <ol :class="styles.items">
            <li :class="styles.item">
                <NavLink
                    :href="links.prev"
                    :disabled="!links.prev"
                    :aria-disabled="!links.prev"
                    title="Previous Page"
                    icon
                >
                    <PhArrowLeft :size="18" />
                </NavLink>
            </li>
            <li :class="styles.item">
                <span>{{ current }}</span>
                <span> of </span>
                <span>{{ total }}</span>
            </li>
            <li :class="styles.item">
                <NavLink
                    :href="links.next"
                    :disabled="!links.next"
                    :aria-disabled="!links.next"
                    title="Next Page"
                    icon
                >
                    <PhArrowRight :size="18" />
                </NavLink>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
import { PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue';
import * as styles from './pagination.css';
import NavLink from '@components/navLink.vue';

type URL = {
    prev?: string;
    next?: string;
};

interface Props {
    links: URL;
    total?: number;
    current?: number;
}

withDefaults(defineProps<Props>(), {
    total: 1,
    current: 1,
    links: () => {
        return {
            prev: undefined,
            next: undefined
        };
    }
});
</script>
