<template>
    <div
        :class="styles.pageBackground"
        :style="{ 'background-image': `url('${image.src}')` }"
    />
</template>

<script lang="ts" setup>
import type { ImageMetadata } from 'astro';
import * as styles from './page-background.css.ts';

interface Props {
    image: ImageMetadata;
}

defineProps<Props>();
</script>
