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
        this.asert_390_5T = '390.5T'
        this.cfr_390_5T_btn = page.locator(locators.regs.cfr_button)
        this.part_40 = page.locator(locators.regs.part_40)
        this.subPart_A = page.locator(locators.regs.subpart_A)
        this.regulation40_1 = page.locator(locators.regs.regulation_cover_40_1)
        this.assert_regulation40_1 = '40.1'
    }
    async clickRegsBook() {
        await this.regBook.click();
        const currentURL = this.page.url();
        await expect(currentURL).toMatch(this.asert_390_5T);
    }
    async click_cfr_390_5T_btn() {
        await this.cfr_390_5T_btn.click();
    }
    async click_part_40_subPart() {
        await this.part_40.click();
        await this.subPart_A.click();
    }
    async regulationCover40_1() {
        await this.regulation40_1.click();
        const currentURL = this.page.url();
        console.log(currentURL)
        await expect(currentURL).toMatch(this.assert_regulation40_1);
        await this.page.waitForTimeout(5000);
    }

};
