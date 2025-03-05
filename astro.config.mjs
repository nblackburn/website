import vue from '@astrojs/vue';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { readTime } from './src/plugins/readTime.mjs';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    compressHTML: true,
    site: 'https://nblackburn.uk/',
    integrations: [vue(), sitemap()],

    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark'
            }
        },

        remarkPlugins: [readTime]
    },

    adapter: node({
        mode: 'standalone'
    }),

    vite: {
        plugins: [vanillaExtractPlugin()]
    }
});
