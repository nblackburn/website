<template>
    <slot />
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { getActivePalette, applyPalette } from '@utilities/paletteManager';

export default {
    setup() {
        onMounted(() => {
            const bodyElement = document.body;
            const activePalette = getActivePalette();

            applyPalette(activePalette, bodyElement);
        });
    }
};
</script>
