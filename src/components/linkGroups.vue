<template>
    <div :class="styles.linkGroups">
        <section
            v-for="group in groups"
            :key="group.id"
            :class="styles.linkGroup"
            :group="group"
        >
            <h3 :class="styles.heading">{{ group.name }}</h3>
            <ol :class="styles.items">
                <li
                    v-for="item in group.items"
                    :key="item.id"
                    :class="styles.item"
                >
                    <Link
                        :href="item.href"
                        :class="styles.link"
                        :aria-label="item.title + ' (External link)'"
                    >
                        <svg
                            width="24"
                            height="24"
                            role="img"
                            :class="styles.icon"
                        >
                            <use href="#external" />
                        </svg>
                        <span>{{ item.title }}</span>
                    </Link>
                </li>
            </ol>
        </section>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import Link from '@components/link.vue';
import * as styles from './linkGroups.css';

type Item = {
    id: string;
    href: string;
    title: string;
};

type Group = {
    id: string;
    name: string;
    items: Item[];
};

export default defineComponent({
    components: {
        Link
    },

    props: {
        groups: {
            type: Array as PropType<Group[]>,
            default() {
                return [];
            }
        }
    },

    setup() {
        return { styles };
    }
});
</script>
