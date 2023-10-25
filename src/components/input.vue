<template>
    <input
        :type="type"
        :name="name"
        :id="id"
        :required="required"
        :disabled="disabled"
        :class="styles.input"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './input.css';

export default defineComponent({
    props: {
        type: {
            type: String
        },

        name: {
            type: String
        },

        id: {
            type: String
        },

        required: {
            type: Boolean
        },

        disabled: {
            type: Boolean
        },

        invalid: {
            type: Boolean
        }
    },

    setup() {
        return { styles };
    }
});
</script>
