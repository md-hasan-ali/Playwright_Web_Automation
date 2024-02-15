const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Log In page', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
      });

    test('should log in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();
    });

});
