<template>
    <section :class="styles.projectList">
        <FilterBar :tags="config.featuredTags" :active="activeTag" />
        <slot />
    </section>
</template>

<script lang="ts" setup>
import config from '@app/config';
import FilterBar from './filterBar.vue';
import * as styles from './projectList.css';

interface Props {
    activeTag?: string;
}

withDefaults(defineProps<Props>(), {
    activeTag: undefined
});
</script>
