import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vanillaExtract from 'astro-vanilla-extract';

export default defineConfig({
    site: 'https://nblackburn.uk/',
    integrations: [vue(), vanillaExtract(), sitemap()],

    experimental: {
        assets: true
    }
});
