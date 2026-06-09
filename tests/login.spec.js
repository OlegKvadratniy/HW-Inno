const { test, expect } = require('@playwright/test');

test.describe('Авторизация на Sauce Demo', () => {

  // Создаем тест-кейс
  test('Пользователь должен успешно войти в систему', async ({ page }) => {
    //Где будем работать
    await page.goto('https://www.saucedemo.com/');

    //Логин и пароль. Нашел синтаксический сахар. Вместо page.locator('[data-test="username"]');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    //Клик на кнопку. Тоже сахар, но как будто может быть не релевантным вариантом в сложных верстках.
    await page.click('#login-button');

    //Проверяем, что мы вошли
    await expect(page).toHaveURL(/inventory\.html/);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
