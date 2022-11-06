<template>
    <Link
        :class="[
            styles.navLink,
            icon ? styles.icon : '',
            active ? styles.active : '',
            disabled ? styles.disabled : ''
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
            type: String
        },

        active: {
            type: Boolean
        },

        icon: {
            type: Boolean
        },

        disabled: {
            type: Boolean
        }
    },

    setup() {
        return { styles };
    }
};
</script>
