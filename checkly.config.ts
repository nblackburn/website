import { defineConfig } from 'checkly';

const config = defineConfig({
    projectName: 'Website',
    logicalId: 'website',
    repoUrl: 'https://github.com/nblackburn/website',

    checks: {
        frequency: 10,
        locations: ['eu-central-1', 'eu-west-1'],
        tags: ['nblackburn', 'website'],
        runtimeId: '2023.02',
        checkMatch: '**/__checks__/**/*.check.ts',
        browserChecks: {
            testMatch: '**/__checks__/**/*.spec.ts'
        }
    },

    cli: {
        runLocation: 'eu-central-1',
        reporters: ['list']
    }
});

export default config;
