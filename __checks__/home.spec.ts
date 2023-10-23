import { test, expect } from '@playwright/test';

const envURL = process.env.ENVIRONMENT_URL ?? 'https://nblackburn.uk';

test('click email link', async ({ page }) => {
    await page.goto(envURL);

    // Find the link
    const emailLink = await page.getByRole('link', {
        name: 'Email (External link)'
    });

    // Set up listener for mailto link
    const mailtoLink = page.waitForRequest((request) =>
        request.url().includes('mailto:')
    );

    // Click the link
    await emailLink.click();

    // Wait for the mailto link listener
    const mailtoRequest = await mailtoLink;

    // Check the mailto link
    await expect(mailtoRequest.url()).toBe('mailto:support@nblackburn.uk');

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click github link', async ({ page }) => {
    await page.goto(envURL);

    // Find the link
    const githubLink = await page.getByRole('link', {
        name: 'GitHub (External link)'
    });

    // Click the link
    await githubLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*github.com/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click dribbble link', async ({ page }) => {
    await page.goto(envURL);

    // Find the link
    const dribbbleLink = await page.getByRole('link', {
        name: 'Dribbble (External link)'
    });

    // Click the link
    await dribbbleLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*dribbble.com/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click soundcloud link', async ({ page }) => {
    await page.goto(envURL);

    // Find the link
    const soundCloudLink = await page.getByRole('link', {
        name: 'Soundcloud (External link)'
    });

    // Click the link
    await soundCloudLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*soundcloud.com/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click about link', async ({ page }) => {
    await page.goto(envURL);

    // Find the link
    const aboutLink = await page.getByRole('link', {
        name: 'More about me'
    });

    // Click the link
    await aboutLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*\/about/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});
