<template>
    <nav :class="styles.navBar">
        <ol :class="styles.items">
            <li v-for="link in links" :class="styles.item">
                <NavLink
                    :href="link.href"
                    :key="link.id"
                    :active="isActive(link)"
                    :aria-current="isActive(link) ? 'page' : false"
                    secondary
                    >{{ link.title }}</NavLink
                >
            </li>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import * as styles from './navBar.css';
import type { NavItem } from '@config/nav';
import NavLink from '@components/navLink.vue';

const props = defineProps({
    activePage: {
        type: String
    },
    links: {
        type: Array as PropType<NavItem[]>,
        default() {
            return [];
        }
    }
});

const isActive = (link: NavItem) => {
    const activePage = props.activePage;

    return activePage === link.id;
};
</script>
