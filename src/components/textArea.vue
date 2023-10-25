<template>
    <textarea
        :type="type"
        :name="name"
        :id="id"
        rows="5"
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
        }
    },

    setup() {
        return { styles };
    }
});
</script>
