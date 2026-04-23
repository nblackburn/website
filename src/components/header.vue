<template>
    <a href="#main" :class="styles.skipToContent">Skip to content</a>
    <div :class="styles.container">
        <header :class="styles.header">
            <Link href="/">
                <Logo :size="40" />
            </Link>
            <Navbar :links="nav" :active-page="activePage" />
        </header>
    </div>
</template>

<script lang="ts" setup>
import { nav } from '@config/nav';
import * as styles from './header.css.ts';
import Logo from '@components/logo.vue';
import Link from '@components/link.vue';
import Navbar from '@components/nav-bar.vue';

interface Props {
    activePage?: string;
}

defineProps<Props>();
</script>
