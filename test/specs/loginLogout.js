import { expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import homePage from "../pageobjects/home.page";
import headerPage from "../pageobjects/header.page.js";
import loginPage from '../pageobjects/login.page.js';
import AllureReporter from '@wdio/allure-reporter';
import ordersPage from '../pageobjects/orders.page.js';

describe("Verify user is able to login and Logout",()=>{
    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
    })

    it("Verify user is able to login", async () =>{
        await headerPage.accountIcon.waitForClickable();
        AllureReporter.addStep('Click on account icon', true);
        await headerPage.accountIcon.click();
        AllureReporter.addStep('Verify login title', true);
        await expect(loginPage.LoginPageTitle).toHaveText("Log in");
        AllureReporter.addStep('Add value in user input field', true);
        await loginPage.inputEmail.addValue("pawelet556@aiworldx.com");
        AllureReporter.addStep('Click on continue button', true);
        await loginPage.ContinueBtn.click();
    })

    it("Verify User is able to Logout", async ()=>{
        await headerPage.accountIcon.click();
        await ordersPage.showAccountMenuBtn.click();
        await ordersPage.logoutBtn.click();
        await expect(homePage.hamburgerIcon).toBeDisplayed();
    })

})