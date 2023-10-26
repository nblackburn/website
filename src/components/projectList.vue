<template>
    <section :class="styles.projectList">
        <slot />
    </section>
</template>

<script lang="ts" setup>
import * as styles from './projectList.css';
</script>
