<template>
    <main :class="styles.main" id="main">
        <slot />
    </main>
</template>

<script lang="ts" setup>
import * as styles from './main.css.ts';
</script>
