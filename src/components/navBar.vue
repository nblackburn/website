<template>
    <nav :class="styles.navBar">
        <ol :class="styles.items">
            <li v-for="link in links" :class="[styles.item, styles.hideSmall]">
                <NavLink
                    :href="link.href"
                    :key="link.id"
                    :active="isActive(link)"
                    secondary
                    >{{ link.title }}</NavLink
                >
            </li>
            <li :class="[styles.item, styles.showSmall]">
                <NavLink href="#" title="Menu" icon>
                    <svg width="24" height="24">
                        <use href="#menu" />
                    </svg>
                </NavLink>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
import { NavItem } from '@config/nav';
import * as styles from './navBar.css';
import NavLink from '@components/navLink.vue';
import { defineComponent, PropType } from 'vue';

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
