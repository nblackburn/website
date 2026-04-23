<template>
    <div ref="element" :class="styles.turnstile" :data-sitekey="siteKey"></div>
</template>

<script lang="ts">
import * as styles from './turnstile.css.ts';
import { defineComponent, onMounted, ref } from 'vue';
import { TURNSTILE_SITE_KEY } from 'astro:env/client';

export default defineComponent({
    emits: ['callback', 'error', 'expired', 'unsupported'],
    setup(_props, ctx) {
        const element = ref();
        const siteKey = TURNSTILE_SITE_KEY;

        const setupScript = () => {
            const turnstile = window.turnstile;

            if (!turnstile) {
                return;
            }

            turnstile.render(element.value, {
                sitekey: siteKey,
                callback: (token: string) => ctx.emit('callback', token),
                'error-callback': (error: number) => ctx.emit('error', error),
                'expired-callback': () =>
                    ctx.emit('expired', { reset: turnstile.reset }),
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
