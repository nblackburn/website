<template>
    <form :method="method" :action="action" @submit.prevent="onSubmit">
        <FieldSet name="contact">
            <div :class="styles.field">
                <label for="name" :class="styles.label">Name*</label>
                <Input
                    type="text"
                    name="name"
                    id="name"
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
                    :rows="5"
                    :min-length="10"
                    :disabled="isSending"
                    required
                />
            </div>
        </FieldSet>

        <Button type="submit" :busy="isSending"
            >{{ isSending ? 'Sending message...' : 'Send message' }}
        </Button>
    </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
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
        const wasSent = ref(false);
        const isSending = ref(false);

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

            isSending.value = false;
            wasSent.value = response.ok;
        };

        return {
            styles,
            wasSent,
            onSubmit,
            isSending,
            setValidity
        };
    }
});
</script>
