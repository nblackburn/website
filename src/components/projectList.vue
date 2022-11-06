<template>
    <section :class="styles.projectList">
        <slot />
    </section>
</template>

<script lang="ts">
import * as styles from './projectList.css';

export default {
    setup() {
        return { styles };
    }
};
</script>
