import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    compressHTML: true,
    site: 'https://nblackburn.uk/',
    integrations: [vue(), sitemap()],

    adapter: vercel({
        imageService: true
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
