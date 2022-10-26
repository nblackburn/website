<template>
    <Link
        :class="[
            styles.navLink,
            active ? styles.active : '',
            icon ? styles.icon : ''
        ]"
        :href="href"
    >
        <slot />
    </Link>
</template>

<script lang="ts">
import Link from '@components/link.vue';
import * as styles from './navLink.css';

export default {
    components: {
        Link
    },

    props: {
        href: {
            type: String,
            required: true
        },

        active: {
            type: Boolean
        },

        icon: {
            type: Boolean
        }
    },

    setup() {
        return { styles };
    }
};
</script>
