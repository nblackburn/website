<template>
    <nav :class="styles.pagination">
        <ol :class="styles.items">
            <li :class="styles.item">
                <NavLink
                    :class="styles.link"
                    :href="links.prev"
                    :disabled="!links.prev"
                    :aria-disabled="!links.prev"
                    >Previous</NavLink
                >
            </li>
            <li :class="styles.item">
                <NavLink
                    :class="styles.link"
                    :href="links.next"
                    :disabled="!links.next"
                    :aria-disabled="!links.next"
                    >Next</NavLink
                >
            </li>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import * as styles from './pagination.css';
import NavLink from '@components/navLink.vue';

type URL = {
    current: string;
    prev: string | undefined;
    next: string | undefined;
};

defineProps({
    links: {
        type: Object as PropType<URL>,
        default() {
            return {};
        }
    }
});
</script>
