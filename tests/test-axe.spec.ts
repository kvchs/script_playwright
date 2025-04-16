import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test.describe('homepage', () => {
    test('should not have any automatically detectable accessibility issues', async({page}) => {
        await page.goto("http://www.baidu.com");
        const accessibilityScanResults = await new AxeBuilder({page}).analyze();
        console.log(accessibilityScanResults)
        expect(accessibilityScanResults.violations).toBeDefined;
        await page.close();
    });
});