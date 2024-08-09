<template>
    <nav :class="styles.navBar">
        <ol :class="styles.items">
            <li v-for="link in links" :key="link.id" :class="styles.item">
                <NavLink :href="link.href" :active="isActive(link)" :aria-current="isActive(link) ? 'page' : false"
                    secondary>{{ link.title }}</NavLink>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
import * as styles from './navBar.css';
import type { NavItem } from '@config/nav';
import NavLink from '@components/navLink.vue';

interface Props {
    activePage?: string,
    links: NavItem[]
};

const props = withDefaults(defineProps<Props>(), {
    links: () => []
});

const isActive = (link: NavItem) => {
    const activePage = props.activePage;

    return activePage === link.id;
};
</script>
