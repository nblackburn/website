<template>
    <form :method="method" :action="action" @submit.prevent="onSubmit">
        <FieldSet name="contact">
            <div :class="styles.field">
                <label for="name" :class="styles.label">Name*</label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    v-model="name"
                    :disabled="isSending"
                    required
                />
            </div>

            <div :class="styles.field">
                <label for="email" :class="styles.label">Email*</label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    v-model="email"
                    :disabled="isSending"
                    required
                />
            </div>
        </FieldSet>

        <FieldSet name="message">
            <div :class="styles.field">
                <label for="message" :class="styles.label">Message*</label>
                <TextArea
                    name="message"
                    id="message"
                    v-model="message"
                    :rows="5"
                    :min-length="10"
                    :disabled="isSending"
                    required
                />
            </div>
        </FieldSet>

        <Button type="submit" :busy="isSending">{{ submitLabel }}</Button>
    </form>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import Input from '@components/input.vue';
import * as styles from './contactForm.css';
import Button from '@components/button.vue';
import listenOnce from '@utilities/listenOnce';
import TextArea from '@components/textArea.vue';
import FieldSet from '@components/fieldSet.vue';

export default defineComponent({
    props: { method: String, action: String },

    components: { Input, Button, TextArea, FieldSet },

    setup() {
        const name = ref();
        const email = ref();
        const message = ref();
        const wasSent = ref(false);
        const isSending = ref(false);
        const submitLabel = computed(() => {
            if (wasSent.value) {
                return 'Message sent';
            }

            return isSending.value ? 'Sending message...' : 'Send message';
        });

        const setValidity = (element: HTMLElement, message: string) => {
            element.setCustomValidity(message);
            element.reportValidity();
        };

        const onSubmit = async (event: Event) => {
            event.preventDefault();

            isSending.value = true;

            const formData = new FormData(event.target as HTMLFormElement);
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const { error } = await response.json();

                error.fields.forEach((field: string) => {
                    const element = document.getElementById(field);

                    if (element) {
                        setValidity(element, 'Please fill in this field');
                        listenOnce(element, 'input', () =>
                            setValidity(element, '')
                        );
                    }
                });
            }

            // Reset state after 5 seconds
            setTimeout(() => (wasSent.value = false), 3000);
            isSending.value = false;
            wasSent.value = response.ok;
        };

        return {
            name,
            email,
            styles,
            message,
            wasSent,
            onSubmit,
            isSending,
            setValidity,
            submitLabel
        };
    }
});
</script>
