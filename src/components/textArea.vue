<template>
    <textarea :name="name" :id="id" :rows="rows" :maxlength="maxLength" :minlength="minLength" :required="required"
        :disabled="disabled" :value="modelValue" :class="[styles.textArea, validated ? styles.validated : '']"
        @invalid="onValidated" @valid="onValidated" @input="$emit('update:modelValue', $event?.target?.value)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as styles from './textArea.css';

interface Props {
    name?: string,
    id?: string,
    rows?: number,
    required?: boolean,
    disabled?: boolean,
    minLength?: number,
    maxLength?: number,
    modelValue?: string
};

defineProps<Props>();
defineEmits(['update:modelValue']);

const validated = ref(false);

const onValidated = () => {
    validated.value = true;
};
</script>
