<template>
    <slot />
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue';
import { getActivePalette, applyPalette } from '@utilities/paletteManager';

export default defineComponent({
    setup() {
        onMounted(() => {
            const bodyElement = document.body;
            const activePalette = getActivePalette();

            applyPalette(activePalette, bodyElement);
        });
    }
});
</script>
