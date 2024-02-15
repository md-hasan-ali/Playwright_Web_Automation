const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { RegsPage } = require('../pages/RegsPage');

test.describe('Project Operations', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login();
      });

    test('Click on the Regs Book', async ({ page }) => {
        const regPage = new RegsPage(page);
        await regPage.clickRegsBook();
    });
});
