<template>
    <textarea
        :name="name"
        :id="id"
        :rows="rows"
        :maxlength="maxLength"
        :minlength="minLength"
        :required="required"
        :disabled="disabled"
        :class="styles.textArea"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './textArea.css';

export default defineComponent({
    props: {
        name: {
            type: String
        },

        id: {
            type: String
        },

        rows: {
            type: Number
        },

        required: {
            type: Boolean
        },

        disabled: {
            type: Boolean
        },

        minLength: {
            type: Number
        },

        maxLength: {
            type: Number
        }
    },

    setup() {
        return { styles };
    }
});
</script>
