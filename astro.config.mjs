import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';
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

    adapter: vercel({
        imageService: true
    }),

    vite: {
        plugins: [vanillaExtractPlugin()],
        resolve: {
            alias: {
                '@root': fileURLToPath(new URL('./', import.meta.url)),
                '@app': fileURLToPath(new URL('./src', import.meta.url)),
                '@config': fileURLToPath(
                    new URL('./src/config', import.meta.url)
                ),
                '@styles': fileURLToPath(
                    new URL('./src/styles', import.meta.url)
                ),
                '@assets': fileURLToPath(
                    new URL('./src/assets', import.meta.url)
                ),
                '@plugins': fileURLToPath(
                    new URL('./src/plugins', import.meta.url)
                ),
                '@layouts': fileURLToPath(
                    new URL('./src/layouts', import.meta.url)
                ),
                '@utilities': fileURLToPath(
                    new URL('./src/utilities', import.meta.url)
                ),
                '@components': fileURLToPath(
                    new URL('./src/components', import.meta.url)
                )
            }
        }
    }
});
