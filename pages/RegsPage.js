// RegsPage.js
const { expect } = require('@playwright/test');
const locators = require('../utils/locators');

exports.RegsPage = class RegsPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.regBook = page.locator(locators.regs.regBook);
        
    }
    async clickRegsBook() {
        await this.regBook.click();
    }
};
