<template>
    <Link
        :class="[
            styles.navLink,
            icon ? styles.icon : '',
            active ? styles.active : '',
            disabled ? styles.disabled : '',
            secondary ? styles.secondary : styles.primary
        ]"
        :href="href"
    >
        <slot />
    </Link>
</template>

<script lang="ts" setup>
import * as styles from './navLink.css';
import Link from '@components/link.vue';

defineProps({
    href: String,
    icon: Boolean,
    active: Boolean,
    disabled: Boolean,
    secondary: Boolean
});
</script>
