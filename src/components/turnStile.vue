<template>
    <div ref="element" :class="styles.turnStile" :data-sitekey="siteKey"></div>
</template>

<script lang="ts">
import * as styles from './turnStile.css';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    emits: ['callback', 'error', 'expired', 'unsupported'],
    setup(_props, ctx) {
        const element = ref();
        const siteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;

        const setupScript = () => {
            const turnStile = window.turnstile;

            if (!turnStile) {
                return;
            }

            turnStile.render(element.value, {
                sitekey: siteKey,
                callback: (token: string) => ctx.emit('callback', token),
                'error-callback': (error: number) => ctx.emit('error', error),
                'expired-callback': () =>
                    ctx.emit('expired', { reset: turnStile.reset }),
                'unsupported-callback': () => ctx.emit('unsupported')
            });
        };

        onMounted(setupScript);

        return {
            styles,
            element,
            siteKey
        };
    }
});
</script>
