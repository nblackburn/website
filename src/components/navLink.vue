<template>
    <a
        :class="[styles.navLink, active ? styles.navLinkActive : '']"
        :href="href"
    >
        <slot />
    </a>
</template>

<script lang="ts">
import * as styles from './navLink.css';

export default {
    props: {
        href: {
            type: String
        },

        active: {
            type: Boolean
        }
    },

    setup() {
        return { styles };
    }
};
</script>
