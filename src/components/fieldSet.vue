<template>
    <fieldset :class="[styles.fieldSet, validated ? styles.validated : '']" :name="name" ref="fieldSet">
        <slot />
    </fieldset>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import listenOnce from '@utilities/listenOnce';
import * as styles from '@components/fieldSet.css';

interface Props {
    name: string
}

defineProps<Props>();

const fieldSet = ref();
const validated = ref(false);

const onValidated = () => {
    validated.value = true;
};

const getFields = (tags: string[]): HTMLElement[] => {
    return tags.flatMap((tag) => {
        const fields = fieldSet.value.getElementsByTagName(tag);

        return Array.from(fields);
    });
};

const setupValidityListeners = () => {
    const fields = getFields(['input', 'textarea']);

    fields.forEach((field) => {
        listenOnce(field, 'valid', onValidated);
        listenOnce(field, 'invalid', onValidated);
    });
};

onMounted(setupValidityListeners);
</script>
