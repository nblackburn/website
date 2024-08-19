import vue from '@astrojs/vue';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    output: 'hybrid',
    compressHTML: true,
    site: 'https://nblackburn.uk/',
    integrations: [vue(), sitemap()],

    adapter: node({
        mode: 'standalone'
    }),

    server: {
        host: '0.0.0.0'
    },

    vite: {
        plugins: [vanillaExtractPlugin()]
    }
});
