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

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import * as styles from './navBar.css';
import type { NavItem } from '@config/nav';
import NavLink from '@components/navLink.vue';

export default defineComponent({
    components: {
        NavLink
    },

    props: {
        activePage: {
            type: String,
            default: undefined
        },

        links: {
            type: Array as PropType<NavItem[]>,
            default() {
                return [];
            }
        }
    },

    setup() {
        return { styles };
    },

    methods: {
        isActive(link: NavItem) {
            const activePage = this.activePage;

            return activePage === link.id;
        }
    }
});
</script>
