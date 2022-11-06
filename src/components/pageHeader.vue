<template>
    <section :class="styles.pageHeader">
        <h1 :class="styles.title">{{ title }}</h1>
        <h2 :class="styles.subTitle">{{ subTitle }}</h2>
    </section>
</template>

<script lang="ts">
import * as styles from './pageHeader.css';

export default {
    props: {
        title: {
            type: String
        },

        subTitle: {
            type: String
        }
    },

    setup() {
        return { styles };
    }
};
</script>
