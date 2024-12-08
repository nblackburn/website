<template>
    <div :class="styles.filterBar">
        <ol :class="styles.items">
            <li
                :class="[
                    styles.item,
                    tag === active ? styles.activeItem : undefined
                ]"
                v-for="tag in tags"
                v-bind:key="tag"
            >
                <a :class="[styles.link]" :href="'/projects/tags/' + tag"
                    >#{{ tag }}</a
                >
            </li>
        </ol>
    </div>
</template>

<script lang="ts" setup>
import * as styles from './filterBar.css';

interface Props {
    tags?: string[];
    active?: string;
}

withDefaults(defineProps<Props>(), {
    tags: () => [],
    active: undefined
});
</script>
