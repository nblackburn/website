import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import vanillaExtract from 'astro-vanilla-extract';

export default defineConfig({
    output: 'static',
    compressHTML: true,
    site: 'https://nblackburn.uk/',
    integrations: [vue(), vanillaExtract(), sitemap()],

    adapter: vercel({
        analytics: true
    }),

    vite: {
        define: {
            'import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID': JSON.stringify(
                process.env.VERCEL_ANALYTICS_ID
            )
        }
    },

    experimental: {
        assets: true
    }
});
