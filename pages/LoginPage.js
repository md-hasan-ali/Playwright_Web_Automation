// LoginPage.js
const { expect } = require('@playwright/test');
const locators = require('../utils/locators');
const testUserconfig = require('../utils/testuserConfig');

exports.LoginPage = class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.userEmailInputField = page.locator(locators.LoginPage.userEmailInput);
        this.passwordInputField = page.locator(locators.LoginPage.passwordInput);
        this.loginButton = page.locator(locators.LoginPage.loginButton);
        this.login1 = page.locator(locators.LoginPage.login);

        this.userId = testUserconfig.userId;
        this.password = testUserconfig.password;
    }

    async goto() {
        await this.page.goto('/');
    }

    async login() {
        await this.login1.click();
        await this.userEmailInputField.fill(this.userId);
        await this.passwordInputField.fill(this.password);
        await this.loginButton.click();
    }

};
