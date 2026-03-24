<template>
    <section :class="styles.hero">
        <h1 :class="styles.strapLine">
            I
            <span :class="styles.accent"
                >{{ picked.action }} {{ picked.kind }}</span
            ><br />
            that
            <span :class="styles.accent">{{ picked.purpose }}</span
            >.
        </h1>
    </section>
</template>

<script lang="ts" setup>
import config from '@app/config';
import * as styles from './hero.css.ts';
import { ref, onUnmounted } from 'vue';
import pickOne from '@utilities/pickOne.ts';

const heroConfig = config.hero;
const lines = config.hero?.lines ?? [];

const pickLine = () => {
    return pickOne(lines);
};

let timer = ref();
let picked = ref(lines[0]);

timer.value = setInterval(() => {
    picked.value = pickLine();
}, heroConfig.timeout);

onUnmounted(() => {
    if (!timer.value) {
        return;
    }

    clearInterval(timer.value);
});
</script>
