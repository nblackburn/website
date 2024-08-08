<template>
    <nav :class="styles.pagination">
        <ol :class="styles.items">
            <li :class="styles.item">
                <NavLink :class="styles.link" :href="links.prev" :disabled="!links.prev" :aria-disabled="!links.prev">
                    Previous</NavLink>
            </li>
            <li :class="styles.item">
                <NavLink :class="styles.link" :href="links.next" :disabled="!links.next" :aria-disabled="!links.next">
                    Next</NavLink>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
import * as styles from './pagination.css';
import NavLink from '@components/navLink.vue';

type URL = {
    prev?: string;
    next?: string;
};

interface Props {
    links: URL
};

withDefaults(defineProps<Props>(), {
    links: () => {
        return {
            prev: undefined,
            next: undefined
        };
    }
});
</script>
