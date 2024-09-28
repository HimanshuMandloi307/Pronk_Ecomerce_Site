import { expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import homePage from "../pageobjects/home.page";
import headerPage from "../pageobjects/header.page.js";
import loginPage from '../pageobjects/login.page.js';
import hamburgerPage from '../pageobjects/hamburger.Page.js';
import collectionsPage from '../pageobjects/collections.page.js';
import cart from '../pageobjects/cart.js';
import utility from '../utility/readDataFromexcel.js';

describe("Verify user is able to login and Logout", () =>{

    before(async () => {
        // await browser.url(baseConfig.baseurl);
        await browser.url("https://pronk.in/");
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
        //Logout Code
    })

    it("Verify user is able to login", async () =>{
        await headerPage.accountIcon.waitForClickable();
        await headerPage.accountIcon.click();
        await expect(loginPage.LoginPageTitle).toHaveText("Log in");
        await loginPage.inputEmail.addValue("pawelet556@aiworldx.com");
        await loginPage.ContinueBtn.click();
        await browser.pause(5000);
        //asertion
    })

    it.only("Select Options from Hamburgermenu",async ()=>{
        await homePage.hamburgerIcon.click();
        await hamburgerPage.dropDownIcon.click();
        await hamburgerPage.selectAnyOptionFromHamburgerMenu("Topwear");
        await hamburgerPage.waitForPage();
        const execlData = await utility.readDatafromExcel("test\Data\Demo_Data_Automation_testing.xlsx", "sheet1");
        await collectionsPage.selectProductByName(execlData.ProductName);
        await collectionsPage.selectSizeOption(execlData.ProductSize);
        // await collectionsPage.addToCartBtn.scrollIntoView();
        // await collectionsPage.addToCartBtn.waitForClickable({ timeout: 30000 });
        // await collectionsPage.addToCartBtn.click();
        // await cart.increaseItemBtn.click();
        // await collectionsPage.placeOrderBtn.click();
        // await browser.pause(5000);
    })

})