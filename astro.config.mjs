import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    compressHTML: true,
    site: 'https://nblackburn.uk/',
    integrations: [vue(), sitemap()],

    adapter: vercel({
        imageService: true,
        webAnalytics: {
            enabled: true
        },
        speedInsights: {
            enabled: true
        }
    }),

    env: {
        schema: {
            RESEND_API_KEY: envField({ context: 'server', access: 'secret' }),
            TURNSTILE_SITE_KEY: envField({ context: 'client', access: 'public' }),
            TURNSTILE_SECRET_KEY: envField({ context: 'server', access: 'secret' })
        }
    },

    vite: {
        plugins: [vanillaExtractPlugin()]
    }
});
