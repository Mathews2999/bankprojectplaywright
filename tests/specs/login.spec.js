import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import HomePage from '../pages/HomePage.js';

test('Login to Parabank', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.navigate();
  await loginPage.login('johnnn', 'demoo'); // Use valid credentials

  await homePage.verifyLoginSuccess();
});