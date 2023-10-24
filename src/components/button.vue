<template>
    <button :class="[styles.button]" :disabled="disabled">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './button.css';

export default defineComponent({
    props: {
        type: {
            type: String
        },

        disabled: {
            type: Boolean
        }
    },

    setup() {
        return { styles };
    }
});
</script>
