<template>
    <section :class="styles.hero">
        <h1 :class="styles.strapLine">
            Experiences that <br /><span
                :class="[styles.highlight, styles.primary]"
                >connect</span
            >
            and
            <span :class="[styles.highlight, styles.secondary]">empower</span>
        </h1>
    </section>
</template>

<script lang="ts" setup>
import * as styles from './hero.css';
</script>
