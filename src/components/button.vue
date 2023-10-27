<template>
    <button :class="styles.button" :disabled="disabled">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import * as styles from './button.css';

defineProps({
    name: String,
    disabled: Boolean
});
</script>
