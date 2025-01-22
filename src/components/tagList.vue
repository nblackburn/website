<template>
    <ol :class="styles.tagList" aria-label="Tags">
        <li
            v-for="tag in tags"
            :class="[
                styles.tag,
                active === slugify(tag) ? styles.activeTag : ''
            ]"
            :key="tag"
        >
            <Link
                :href="baseURL + '/' + slugify(tag)"
                :class="styles.link"
                :aria-current="active === slugify(tag)"
            >
                <span :class="styles.hash">#</span>
                <span>{{ tag }}</span>
            </Link>
        </li>
    </ol>
</template>

<script lang="ts" setup>
import * as styles from './tagList.css';
import Link from '@components/link.vue';
import slugify from '@utilities/slugify';

interface Props {
    tags?: string[];
    active?: string;
    baseURL?: string;
}

withDefaults(defineProps<Props>(), {
    tags: () => [],
    active: undefined,
    baseURL: undefined
});
</script>
