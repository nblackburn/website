<template>
    <section :class="styles.pageHeader">
        <h1 :class="styles.title">{{ title }}</h1>
        <p :class="styles.subTitle">{{ subTitle }}</p>
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
