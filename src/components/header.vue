<template>
    <header :class="styles.header">
        <AccentBar />
        <div :class="styles.container">
            <Link href="/">
                <Logo />
            </Link>
            <Navbar :links="nav" :active-page="activePage" />
        </div>
    </header>
</template>

<script lang="ts" setup>
import { nav } from '@config/nav';
import * as styles from './header.css';
import Logo from '@components/logo.vue';
import Link from '@components/link.vue';
import Navbar from '@components/navBar.vue';
import AccentBar from '@components/accentBar.vue';

interface Props {
    activePage?: string;
}

defineProps<Props>();
</script>
