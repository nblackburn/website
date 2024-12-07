<template>
    <nav :class="styles.pagination">
        <ol :class="styles.items">
            <li :class="styles.item">
                <NavLink
                    :class="styles.link"
                    :href="links.prev"
                    :disabled="!links.prev"
                    :aria-disabled="!links.prev"
                    title="Previous Page"
                >
                    <svg width="24" height="24" role="img">
                        <use href="#arrow-left" />
                    </svg>
                </NavLink>
            </li>
            <li :class="styles.item">
                <span>{{ current }}</span>
                <span> of </span>
                <span>{{ total }}</span>
            </li>
            <li :class="styles.item">
                <NavLink
                    :class="styles.link"
                    :href="links.next"
                    :disabled="!links.next"
                    :aria-disabled="!links.next"
                    title="Next Page"
                >
                    <svg width="24" height="24" role="img">
                        <use href="#arrow-right" />
                    </svg>
                </NavLink>
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
