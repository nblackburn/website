import dotenv from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

dotenv.config();

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: process.env.CI ? 'playwright-ctrf-json-reporter' : 'html',
    use: {
        trace: 'on-first-retry'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});
