<template>
    <main :class="styles.main">
        <slot />
    </main>
</template>

<script lang="ts" setup>
import * as styles from './main.css';
</script>
