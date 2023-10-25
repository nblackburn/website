<template>
    <form :method="method" :action="action">
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

        <Button type="submit">Send message</Button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    }
});
</script>
