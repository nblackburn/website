import vue from '@astrojs/vue';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vanillaExtract from 'astro-vanilla-extract';

const imageConfig = {
    serviceEntryPoint: '@astrojs/image/sharp'
};

export default defineConfig({
    site: 'https://nblackburn.uk',
    integrations: [vue(), vanillaExtract(), image(imageConfig), sitemap()]
});
