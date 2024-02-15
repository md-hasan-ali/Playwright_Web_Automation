const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { RegsPage } = require('../pages/RegsPage');

test.describe('Regs Page Automation', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login();
    });

    test('First Scenario Automation of Regs page', async ({ page }) => {
        const regPage = new RegsPage(page);
        await regPage.clickRegsBook();
        await regPage.click_cfr_390_5T_btn();
        await regPage.click_part_40_subPart();
        await regPage.regulationCover40_1();
    });
});
