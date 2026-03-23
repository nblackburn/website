<template>
    <section :class="styles.hero">
        <h1 :class="styles.strapLine">
            I {{ picked.action }}
            <span :class="styles.accent">{{ picked.kind }}</span
            ><br />
            that
            <span :class="styles.accent">{{ picked.purpose }}</span
            >.
        </h1>
    </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import * as styles from './hero.css.ts';
import config from '@app/config';
import pickOne from '@utilities/pickOne.ts';

const pickLine = () => {
    const lines = config.hero?.lines ?? [];

    return pickOne(lines);
};

const picked = computed(pickLine);
</script>
