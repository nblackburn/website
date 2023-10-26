<template>
    <input
        :type="type"
        :name="name"
        :id="id"
        :required="required"
        :disabled="disabled"
        :class="[styles.input, validated ? styles.validated : '']"
        @invalid="onValidated"
        @valid="onValidated"
    />
</template>

<script lang="ts">
import * as styles from './input.css';
import { defineComponent, ref, defineEmits } from 'vue';

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
