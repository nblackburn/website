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
import { defineComponent } from 'vue';
import * as styles from './navLink.css';
import Link from '@components/link.vue';

export default defineComponent({
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
});
</script>
