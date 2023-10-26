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

<script lang="ts" setup>
import { ref } from 'vue';
import * as styles from './input.css';

defineProps({
    type: String,
    name: String,
    id: String,
    required: Boolean,
    disabled: Boolean
});

const validated = ref(false);

const onValidated = () => {
    validated.value = true;
};
</script>
