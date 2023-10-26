<template>
    <form :method="method" :action="action" @submit.prevent="onSubmit">
        <fieldset name="contact" :class="styles.fieldSet">
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
        </fieldset>

        <fieldset :class="styles.fieldSet">
            <div :class="styles.field">
                <label for="message" :class="styles.label">Message*</label>
                <TextArea
                    name="message"
                    id="message"
                    :disabled="isSending"
                    required
                />
            </div>
        </fieldset>

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
import TextArea from '@components/textArea.vue';

export default defineComponent({
    components: { Input, TextArea, Button },

    props: {
        method: {
            type: String
        },

        action: {
            type: String
        }
    },

    setup() {
        const wasSent = ref(false);
        const isSending = ref(false);

        return { styles, wasSent, isSending };
    },

    methods: {
        setValidity(element: HTMLElement, message: string) {
            element.setCustomValidity(message);
            element.reportValidity();
        },

        oneTimeEvent(
            element: HTMLElement,
            event: string,
            handler: EventListenerOrEventListenerObject
        ) {
            const eventListener = (event: Event) => {
                if (!event || !event.target) {
                    return;
                }

                if (typeof handler === 'function') {
                    handler(event);
                }

                event.target.removeEventListener(event.type, eventListener);
            };

            element.addEventListener(event, eventListener);
        },

        async onSubmit(event: Event) {
            event.preventDefault();

            this.isSending = true;

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
                        this.setValidity(element, 'Please fill in this field');
                        this.oneTimeEvent(element, 'input', () =>
                            this.setValidity(element, '')
                        );
                    }
                });
            }

            this.isSending = false;
            this.wasSent = response.ok;
        }
    }
});
</script>
