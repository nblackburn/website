<template>
    <div :class="styles.linkGroups">
        <div
            v-for="group in groups"
            :key="group.id"
            :class="styles.linkGroup"
            :group="group"
        >
            <div :class="styles.heading">{{ group.name }}</div>
            <ol :class="styles.items">
                <li
                    v-for="item in group.items"
                    :key="item.id"
                    :class="styles.item"
                >
                    <a :href="item.href" :class="styles.link" target="_blank">
                        <svg width="24" height="24" :class="styles.icon">
                            <use href="#url" />
                        </svg>
                        <span>{{ item.title }}</span>
                    </a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
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

export default {
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
};
</script>
