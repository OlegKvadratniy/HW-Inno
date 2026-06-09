const { test, expect } = require('@playwright/test');

test('Попытка входа заблокированного пользователя', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});