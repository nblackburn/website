<template>
    <section :class="styles.latestProject">
        <h2 :class="styles.title">Latest project</h2>
        <slot />
    </section>
</template>

<script lang="ts" setup>
import * as styles from './latestProject.css';
</script>
