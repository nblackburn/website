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

<script lang="ts" setup>
import { ref } from 'vue';
import * as styles from './textArea.css';

defineProps({
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
});

const validated = ref(false);

const onValidated = () => {
    validated.value = true;
};
</script>
