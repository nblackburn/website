<template>
    <header :class="styles.header">
        <AccentBar />
        <div :class="styles.container">
            <a href="/">
                <Logo />
            </a>
            <Navbar :links="links" :route="route" />
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './header.css';
import Logo from '@components/logo.vue';
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
        route: {
            type: String,
            default: undefined
        }
    },

    components: {
        Logo,
        Navbar,
        AccentBar
    },

    setup() {
        return { styles, links };
    }
});
</script>
