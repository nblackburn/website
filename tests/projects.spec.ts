import { test, expect } from '@playwright/test';

const envURL = process.env.ENVIRONMENT_URL ?? 'https://nblackburn.uk';

test('click project link', async ({ page }) => {
    await page.goto(`${envURL}/projects`);

    // Find the link
    const projectLink = await page
        .getByRole('link', {
            name: 'View project (External link)'
        })
        .first();

    const projectHref = await projectLink.getAttribute('href');

    // Set up listener for mailto link
    const linkListener = page.waitForRequest(
        (request) => request.url() === projectHref
    );

    // Click the link
    await projectLink.click();

    // Wait for the mailto link listener
    const linkRequest = await linkListener;

    // Check the page redirects to the correct URL
    await expect(linkRequest.url()).toBe(projectHref);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click project tags', async ({ page }) => {
    await page.goto(`${envURL}/projects`);

    // Find a project tag
    const projectTag = await page.getByLabel('Tags').first();

    // Find a tag link
    const tagLink = await projectTag.getByRole('link').first();

    // Click the link
    await tagLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*\/projects\/tags\/[a-z0-9-]/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click next page', async ({ page }) => {
    await page.goto(`${envURL}/projects`);

    // Find the link
    const nextLink = await page.getByRole('link', {
        name: 'Next'
    });

    // Click the link
    await nextLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*\/projects(\/[0-9]+)?/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});

test('click last page', async ({ page }) => {
    await page.goto(`${envURL}/projects`);

    // Find the next link
    const nextLink = await page.getByRole('link', {
        name: 'Next'
    });

    // Click the next link
    await nextLink.click();

    // Find the previous link
    const previousLink = await page.getByRole('link', {
        name: 'Previous'
    });

    // Click the previous link
    await previousLink.click();

    // Check the page redirects to the correct URL
    await expect(page).toHaveURL(/.*\/projects(\/[0-9]+)?/);

    // Take a screenshot to verify
    await page.screenshot({ path: 'screenshot.jpg' });
});
