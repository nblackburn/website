<template>
    <section :class="styles.projectList">
        <slot />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './projectList.css';

export default defineComponent({
    setup() {
        return { styles };
    }
});
</script>
