<template>
    <nav :class="styles.pagination">
        <ol :class="styles.items">
            <li :class="styles.item">
                <NavLink
                    :class="styles.link"
                    :href="links.prev"
                    :disabled="!links.prev"
                    >Previous</NavLink
                >
            </li>
            <li :class="styles.item">
                <NavLink
                    :class="styles.link"
                    :href="links.next"
                    :disabled="!links.next"
                    >Next</NavLink
                >
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import * as styles from './pagination.css';
import NavLink from '@components/navLink.vue';

type URL = {
    current: string;
    prev: string | undefined;
    next: string | undefined;
};

export default defineComponent({
    components: {
        NavLink
    },

    props: {
        links: {
            type: Object as PropType<URL>,
            default() {
                return {};
            }
        }
    },

    setup() {
        return { styles };
    }
});
</script>
