<template>
    <slot />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { getActivePalette, applyPalette } from '@utilities/palette-manager';

onMounted(() => {
    const bodyElement = document.body;
    const activePalette = getActivePalette();

    applyPalette(activePalette, bodyElement);
});
</script>
