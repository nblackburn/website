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
                <a :class="[styles.link]" :href="tagURL(tag)">
                    <span :class="styles.hash">#</span>
                    <span>{{ tag }}</span>
                </a>
            </li>
        </ol>
    </div>
</template>

<script lang="ts" setup>
import * as styles from './filterBar.css';

interface Props {
    tags?: string[];
    active?: string;
    baseURL?: string;
}

const props = withDefaults(defineProps<Props>(), {
    tags: () => [],
    active: undefined,
    baseURL: undefined
});

const tagURL = (tag: string) => {
    if (props.baseURL) {
        const baseURL = props.baseURL.endsWith('/')
            ? props.baseURL
            : props.baseURL + '/';

        return `${baseURL}${tag}`;
    }

    return tag;
};
</script>
