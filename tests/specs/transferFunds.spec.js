import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import TransferFundsPage from '../pages/TransferFundsPage.js';
import HomePage from '../pages/HomePage.js';

test('Transfer Funds in Parabank', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const transferFundsPage = new TransferFundsPage(page);

  await loginPage.navigate();
  await loginPage.login('john', 'demo'); // Use valid credentials

  await homePage.verifyLoginSuccess();

  await transferFundsPage.navigate();
  await transferFundsPage.transferFunds('100', '12345', '54321'); // Use valid account IDs

  await transferFundsPage.verifyTransferSuccess();
});