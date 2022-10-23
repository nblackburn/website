import vue from '@astrojs/vue';
import image from '@astrojs/image';
import { defineConfig } from 'astro/config';
import vanillaExtract from 'astro-vanilla-extract';

const imageConfig = {
    serviceEntryPoint: '@astrojs/image/sharp'
};

export default defineConfig({
    integrations: [vue(), vanillaExtract(), image(imageConfig)]
});
