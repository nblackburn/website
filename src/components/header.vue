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

<script lang="ts">
import { nav } from '@config/nav';
import { defineComponent } from 'vue';
import * as styles from './header.css';
import Logo from '@components/logo.vue';
import Link from '@components/link.vue';
import Navbar from '@components/navBar.vue';
import AccentBar from '@components/accentBar.vue';

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
        return { styles, nav };
    }
});
</script>
