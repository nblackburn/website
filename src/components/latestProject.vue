<template>
    <section :class="styles.latestProject">
        <h2 :class="styles.title">Latest project</h2>
        <slot />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './latestProject.css';
import ProjectCard from '@components/projectCard.vue';

export default defineComponent({
    components: { ProjectCard },

    setup() {
        return { styles };
    }
});
</script>
