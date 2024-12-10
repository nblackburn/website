<template>
    <section :class="styles.hero">
        <h1 :class="styles.strapLine">
            Experiences that <br />
            <span :class="styles.accent"
                >connect <span :class="styles.reset">and</span> empower</span
            >
        </h1>
    </section>
</template>

<script lang="ts" setup>
import * as styles from './hero.css';
</script>
