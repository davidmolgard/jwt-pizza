import { test, expect } from 'playwright-test-coverage';

test('home page', async ({ page }) => {
  await page.goto('/');

  expect(await page.title()).toBe('JWT Pizza');
});

test('purchase with login', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('a@jwt.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Order now' }).click();
    await page.getByRole('combobox').selectOption('238');
    await page.getByRole('link', { name: 'Image Description Veggie A' }).click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page.locator('tbody')).toContainText('Veggie');
    await expect(page.locator('tfoot')).toContainText('1 pie');
    await page.getByRole('button', { name: 'Pay now' }).click();
    await expect(page.getByRole('heading')).toContainText('Here is your JWT Pizza!');
});

test('franchise page', async ({ page }) => {
  await page.goto('/');  
  await page.getByLabel('Global').getByRole('link', { name: 'Franchise' }).click();
  await expect(page.getByRole('main')).toContainText('So you want a piece of the pie?');
});

test('about page', async ({ page }) => {
  await page.goto('/');  
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.getByRole('main')).toContainText('The secret sauce');
  await expect(page.getByRole('main')).toContainText('Our employees');
});

test('history page', async ({ page }) => {
  await page.goto('/');  
  await page.getByRole('link', { name: 'History' }).click();
  await expect(page.getByRole('heading')).toContainText('Mama Rucci, my my');
});


  