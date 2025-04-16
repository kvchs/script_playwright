import {test, expect} from '@playwright/test'


test('have title', async ({page} ) => {
    await page.goto('https://admin-test.kaifeivr.com/login');
    
});



test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto('https://playwright.nodejs.cn/');
    });
  
    test('main navigation', async ({ page }) => {
      // Assertions use the expect API.
      await expect(page).toHaveURL('https://playwright.nodejs.cn/');
    });
  });



// test.use(devices['iPhone11']);

test('should be titel', async({page, context}) => {
    await context.route('**.jpg', route => route.abort());
    await page.goto('https://example.com/');
    await expect(page).toHaveTitle("Example");
});
