import { test } from '@playwright/test';

const envURL = process.env.ENVIRONMENT_URL ?? 'https://nblackburn.uk';

test('click about link', async ({ page }) => {
    await page.goto(`${envURL}/about`);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});
