<template>
    <header :class="styles.header">
        <AccentBar />
        <div :class="styles.container">
            <Link href="/">
                <Logo />
            </Link>
            <Navbar :links="links" :active-page="activePage" />
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './header.css';
import Logo from '@components/logo.vue';
import Link from '@components/link.vue';
import Navbar from '@components/navBar.vue';
import AccentBar from '@components/accentBar.vue';

export type Link = {
    id: string;
    title: string;
    href: string;
};

const links: Link[] = [
    { id: 'home', title: 'Home', href: '/' },
    { id: 'about', title: 'About', href: '/about' }
];

export default defineComponent({
    props: {
        activePage: {
            type: String,
            default: undefined
        }
    },

    components: {
        Logo,
        Link,
        Navbar,
        AccentBar
    },

    setup() {
        return { styles, links };
    }
});
</script>
