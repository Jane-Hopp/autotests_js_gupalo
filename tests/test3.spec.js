// @ts-check
// Тестирование функциональности “Выпадающий список для настройки количества книг на странице”
const { test, expect } = require('@playwright/test');

test('После выбора количества книг в выпадающем списке, на странице должно остаться заданное количество книг', async ({ page }) => {
  await page.goto('https://demoqa.com/books');

  // Выбор второго элемента из выпадающего списка
  // Выбранный элемент можно менять в: ({index: 1}). Нумерация начинается с нуля
  const countOfPages = await page.locator('select').selectOption({index: 1});
 
  // Подсчет количества книг, которые появились в таблице
  const rezultCountOfPages = await page.locator('.rt-tr-group').count();
  
  // Проверка: выбранное количесво книг в выпадающем списке должно совпадать с количеством появившихся книг в таблице
  await expect(page.locator('select')).toHaveValue(String(rezultCountOfPages));

  //await page.pause(); //оставновка закрытия браузера для проверки
});