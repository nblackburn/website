<template>
    <div :class="styles.accentBar"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './accentBar.css';

export default defineComponent({
    setup() {
        return { styles };
    }
});
</script>
