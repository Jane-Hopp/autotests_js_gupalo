// @ts-check
// Тестирование функциональности “Поле для поиска”
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/books');
});

test.describe('Поле для поиска', () => {
  test('После ввода в поле поиска Название книги (Title), в первой строке таблицы должна появиться книга с заданным названием', async ({ page }) => { 
    // Создание локатора для строки Поиска
    const locatorSearch = page.locator('#searchBox');
  
    // Получение названия Третьей по счету книги из общего списка книг
    // Можно выбрать другую по счету книгу, изменив значение в: nth-child(3) 
    const stringSearch = await page.innerText(":light(.rt-tbody .rt-tr-group:nth-child(3) a)");  //Shadow DOM
  
    // Полученное название книги помещается в поле Поиска 
    await locatorSearch.fill(stringSearch);
  
    // Считывается название книги, которая в результате поиска появилась в первой строке таблицы
    const stringResult = await page.innerText(":light(.rt-tbody .rt-tr-group:nth-child(1) a)");
  
    // Проверка: совпадает ли название книги в строке Поиска и название книги в первой строке таблицы
    expect(stringSearch).toEqual(stringResult); 
  
    //await page.pause(); //оставновка закрытия браузера для проверки
  });

  test('После ввода в поле поиска Имя автора (Author), в первой строке таблицы должна появиться книга с заданным автором', async ({ page }) => {
    // Создание локатора для строки Поиска
    const locatorSearch = page.locator('#searchBox');
  
    // Получение имя автора Третьей по счету книги из общего списка книг
    // Можно выбрать другого автора, изменив значение в: .rt-tr-group:nth-child(3)
    const stringSearch = await page.innerText(":light(.rt-tbody .rt-tr-group:nth-child(3) .rt-td:nth-child(3))");  //Shadow DOM
  
    // Полученное имя автора помещается в поле Поиска
    await locatorSearch.fill(stringSearch);
  
    // Считывается имя автора книги, которая в результате поиска появилась в первой строке таблицы
    const stringResult = await page.innerText(":light(.rt-tbody .rt-tr-group:nth-child(1) .rt-td:nth-child(3))");
  
    // Проверка: совпадает ли имя автора книги в строке Поиска и имя автора книги в первой строке таблицы
    expect(stringSearch).toEqual(stringResult); 
  
    //await page.pause(); 
  });

  test('После ввода в поле поиска Издателя (Publisher), в первой строке таблицы должна появиться книга с заданным издателем', async ({ page }) => { 
    // Создание локатора для строки Поиска
    const locatorSearch = page.locator('#searchBox');
  
    // Получение Издателя Третьей по счету книги из общего списка книг
    // Можно выбрать другого издателя, изменив значение в: .rt-tr-group:nth-child(3)
    const stringSearch = await page.innerText(":light(.rt-tbody .rt-tr-group:nth-child(3) .rt-td:nth-child(4))");  //Shadow DOM
  
    // Полученное имя Издателя помещается в поле Поиска
    await locatorSearch.fill(stringSearch);
  
    // Считывается издатель книги, которая в результате поиска появилась в первой строке таблицы
    const stringResult = await page.innerText(":light(.rt-tbody .rt-tr-group:nth-child(1) .rt-td:nth-child(4))");
  
    // Проверка: совпадает ли издатель книги в строке Поиска и издатель книги в первой строке таблицы
    expect(stringSearch).toEqual(stringResult);
  
    //await page.pause(); 
  });
});