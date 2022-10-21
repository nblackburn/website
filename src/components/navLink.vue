<template>
    <a
        :class="[
            styles.navLink,
            active ? styles.active : '',
            icon ? styles.icon : ''
        ]"
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
