<template>
    <section :class="styles.notFound">
        <div :class="styles.container">
            <h1 :class="styles.title">404</h1>
            <h2 :class="styles.subTitle">Page not found</h2>
            <p :class="styles.description">
                Well this is embarrasing, the link you clicked appears to be
                broken or the page has moved.
            </p>
        </div>
    </section>
</template>

<script lang="ts" setup>
import * as styles from './notFound.css';
</script>
