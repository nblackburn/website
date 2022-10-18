<template>
    <main :class="styles.main">
        <slot />
    </main>
</template>

<script lang="ts">
import * as styles from './main.css';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return { styles };
    }
});
</script>
