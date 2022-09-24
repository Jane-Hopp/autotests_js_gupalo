// @ts-check
// Тестирование функциональности “Кнопки Previous и Next”
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/books');
});

test.describe('Кнопки Next и Previous', () => {
  test('Число, которое находится после слова Page должно увеличиться на 1 (стать равно 2)', async ({ page }) => {
    // Выбор первого (наменьшего) элемента из выпадающего списка, чтобы появилась возможность перехода по кнопке Next
    const countOfPages = await page.locator('select').selectOption({index: 0});
  
    // Нажатие на кнопку Next
    const buttomNext = page.locator('.-next > button');
    await buttomNext.click();

    // Проверка: число после слова Page должно быть равно 2
    await expect(page.locator('.-pageJump > input')).toHaveValue('2');

    //await page.pause(); //остановка закрытия браузера для проверки
  });

  test('Число, которое находится после слова Page должно уменьшиться на 1 (стать равно 1)', async ({ page }) => {
    // Выбор первого (наменьшего) элемента из выпадающего списка, чтобы появилась возможность перехода по кнопке Next
    const countOfPages = await page.locator('select').selectOption({index: 0});
  
    // Нажатие на кнопку Next, чтобы получить возможность вернуться назад
    const buttomNext = page.locator('.-next > button');
    await buttomNext.click();

    // Нажатие на кнопку Previous
    const buttomPrevious = page.locator('.-previous > button');
    await buttomPrevious.click();
  
    // Проверяем, что число после слова Page равно 1
    await expect(page.locator('.-pageJump > input')).toHaveValue('1');
  
    //await page.pause();
  });
});