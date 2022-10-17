<template>
    <nav :class="styles.navBar">
        <ol :class="styles.items">
            <li v-for="link in links" :class="styles.item">
                <a
                    :href="link.href"
                    :key="link.id"
                    :class="[
                        styles.link,
                        isActive(link) ? styles.linkActive : ''
                    ]"
                    >{{ link.title }}</a
                >
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
import * as styles from './navBar.css';
import { Link } from '@components/header.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        route: {
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
            const route = this.route;

            return route === link.href;
        }
    }
});
</script>
