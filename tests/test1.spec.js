// @ts-check
// Тестирование функциональности “Вход в личный кабинет”
const { test, expect } = require('@playwright/test');

test('После ввода UserName и Password должна появиться кнопка с надписью Log out', async ({ page }) => {
  await page.goto('https://demoqa.com/books');

  // Переход на страницу входа в Личный кабинет
  const locatorProfile = page.locator('#login');
  await locatorProfile.click();

  // Создание локаторов на странице входа в ЛК
  const locatorUserName = page.locator('#userName');
  const locatorPassword = page.locator('#password');
  const locatorLogin = page.locator('#login');

  // Ввод и отправка данных на странице входа в ЛК
  await locatorUserName.fill('testUser');
  await locatorPassword.fill('Qwerty12345@Gupalo');
  await locatorLogin.click();

  // Проверка: появилась ли кнопка с надписью Log out
  const buttomTitle = await page.innerText(":light(#submit)");  //Shadow DOM
  expect(buttomTitle).toEqual('Log out'); //убран await
  
  //await page.pause(); //оставновка закрытия браузера для проверки
});