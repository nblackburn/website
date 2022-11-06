<template>
    <section :class="styles.pagination">
        <NavLink :class="styles.link" :href="links.prev" :disabled="!links.prev"
            >Previous</NavLink
        >
        <NavLink :class="styles.link" :href="links.next" :disabled="!links.next"
            >Next</NavLink
        >
    </section>
</template>

<script lang="ts">
import * as styles from './pagination.css';
import NavLink from '@components/navLink.vue';
import { defineComponent, PropType } from 'vue';

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
