import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-test.kaifeivr.com/login');
  await page.locator('.el-input__wrapper').first().click();
  await page.getByRole('textbox', { name: '请输入账号' }).fill('CYC');
  await page.getByRole('textbox', { name: '请输入密码' }).click();
  await page.getByRole('textbox', { name: '请输入密码' }).fill('xxxx');
  await page.getByRole('button', { name: '登录' }).click();
  await page.getByRole('menuitem', { name: '入账统计' }).click();
  await page.close();
});