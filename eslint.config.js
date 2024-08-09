import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
    { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
    { ignores: [".astro/", ".husky/", ".vercel/", "node_modules/", "**/*.json", "**/*.lock"] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.es2021 } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    ...eslintPluginAstro.configs['flat/recommended'],
    { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
];