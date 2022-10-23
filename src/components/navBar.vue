<template>
    <nav :class="styles.navBar">
        <ol :class="styles.items">
            <li v-for="link in links" :class="styles.item">
                <NavLink
                    :href="link.href"
                    :key="link.id"
                    :active="isActive(link)"
                    >{{ link.title }}</NavLink
                >
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
import * as styles from './navBar.css';
import { Link } from '@components/header.vue';
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
            type: Array as PropType<Link[]>,
            default() {
                return [];
            }
        }
    },

    setup() {
        return { styles };
    },

    methods: {
        isActive(link: Link) {
            const activePage = this.activePage;

            return activePage === link.id;
        }
    }
});
</script>
