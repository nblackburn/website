<template>
    <textarea
        :name="name"
        :id="id"
        :rows="rows"
        :maxlength="maxLength"
        :minlength="minLength"
        :required="required"
        :disabled="disabled"
        :class="[styles.textArea, validated ? styles.validated : '']"
        @invalid="onValidated"
        @valid="onValidated"
    />
</template>

<script lang="ts">
import * as styles from './textArea.css';
import { defineComponent, ref } from 'vue';

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
        const validated = ref(false);

        return { styles, validated };
    },

    methods: {
        onValidated() {
            this.validated = true;
        }
    }
});
</script>
