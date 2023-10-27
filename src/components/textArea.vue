<template>
    <textarea
        :name="name"
        :id="id"
        :rows="rows"
        :maxlength="maxLength"
        :minlength="minLength"
        :required="required"
        :disabled="disabled"
        :value="modelValue"
        :class="[styles.textArea, validated ? styles.validated : '']"
        @invalid="onValidated"
        @valid="onValidated"
        @input="$emit('update:modelValue', $event?.target?.value)"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as styles from './textArea.css';

defineProps({
    name: String,
    id: String,
    rows: Number,
    required: Boolean,
    disabled: Boolean,
    minLength: Number,
    maxLength: Number,
    modelValue: String
});

defineEmits(['update:modelValue']);

const validated = ref(false);

const onValidated = () => {
    validated.value = true;
};
</script>
