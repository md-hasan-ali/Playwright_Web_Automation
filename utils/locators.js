// utils/locators.js

module.exports = {
    //Locators using xpath
    LoginPage: {
      login: "//a[normalize-space()='Login']",
      userEmailInput: "//input[@placeholder='Email']",
      passwordInput: "//input[@placeholder='Password']",
      loginButton: "//button[normalize-space()='Login']"
    },

    regs:  {
      regBook: "//img[@alt='menubook']",
      cfr_button: '//*[@id="headlessui-menu-button-:r1:"]/h2',
      part_40: "//p[contains(text(),'Part 40—Procedures for Transportation Workplace Dr')]",
      subpart_A: '//p[text()="Subpart A—Administrative Provisions"]',
      regulation_cover_40_1: '//p[text()="§ 40.1 Who does this regulation cover?"]'
    }
  };