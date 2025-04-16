// import { expect, test, devices } from '@playwright/test'
import { test, expect, devices } from '@playwright/test';


// test.use(devices['iPhone11']);

test('should be titel', async({page, context}) => {
    await context.route('**.jpg', route => route.abort());
    await page.goto('https://example.com/');
    await expect(page).toHaveTitle("Example");
});

  





