<template>
    <input
        :type="type"
        :name="name"
        :id="id"
        :required="required"
        :disabled="disabled"
        :value="modelValue"
        :class="[styles.input, validated ? styles.validated : '']"
        @invalid="onValidated"
        @valid="onValidated"
        @input="$emit('update:modelValue', $event?.target?.value)"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as styles from './input.css';

interface Props {
    type?: string;
    name?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    modelValue?: string;
}

defineProps<Props>();
defineEmits(['update:modelValue']);

const validated = ref(false);

const onValidated = () => {
    validated.value = true;
};
</script>
