import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import node from '@astrojs/node';

export default defineConfig({
    compressHTML: true,
    site: 'https://nblackburn.uk/',
    integrations: [vue(), sitemap()],

    adapter: node({
        mode: 'standalone'
    }),

    vite: {
        plugins: [vanillaExtractPlugin()],

        define: {
            'import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID': JSON.stringify(
                process.env.VERCEL_ANALYTICS_ID
            )
        }
    }
});
