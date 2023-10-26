<template>
    <section :class="styles.pageHeader">
        <h1 :class="styles.title">
            <span :class="styles.highlight">{{ title }}</span>
        </h1>
        <h2 :class="styles.subTitle">{{ subTitle }}</h2>
    </section>
</template>

<script lang="ts" setup>
import * as styles from './pageHeader.css';

defineProps({
    title: String,
    subTitle: String
});
</script>
