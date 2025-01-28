import { test, expect } from '@playwright/test';

const envURL = process.env.ENVIRONMENT_URL ?? 'https://nblackburn.uk';

test('click blog link', async ({ page }) => {
    await page.goto(`${envURL}/blog`);

    // Find the link
    const postLink = await page
        .getByRole('link', {
            name: 'Read post'
        })
        .first();

    // Click the link
    await postLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*\/blog\/[a-z0-9-]/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click blog tags', async ({ page }) => {
    await page.goto(`${envURL}/blog`);

    // Find a project tag
    const projectTag = await page.getByLabel('Tags').first();

    // Find a tag link
    const tagLink = await projectTag.getByRole('link').first();

    // Click the link
    await tagLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*\/blog\/tags\/[a-z0-9-]/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});
