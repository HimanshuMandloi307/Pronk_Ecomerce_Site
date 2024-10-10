import { browser, expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import homePage from "../pageobjects/home.page";
import hamburgerPage from '../pageobjects/hamburger.Page.js';
import collectionsPage from '../pageobjects/collections.page.js';
import cart from '../pageobjects/cart.js';
import xlsxReader from '../utility/readDataFromexcel.js';
import AllureReporter from '@wdio/allure-reporter';
import headerPage from '../pageobjects/header.page.js';
import ordersummaryPage from '../pageobjects/ordersummary.page.js';

describe("Verify Hamburger Menu Options and Purches product", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

     beforeEach(async()=>{
        await homePage.logoImg.click();
        await homePage.waitForPage();
     })

     afterEach(async()=>{
        await browser.refresh();
     })

    after(async () =>{
        console.log("Thank You For Visit !!!!")
    })

    it("Verify Cart Option and check product displayed on cart",async()=>{
        AllureReporter.addStep("Clcik on cart button",true);
        await headerPage.bagIcon.click();
        await expect(cart.cardTitle).toBeDisplayed();
        await cart.closeCartBtn.isClickable();
        AllureReporter.addStep("Clcik on close cart button",true);
        await cart.closeCartBtn.click();
        await expect(homePage.logoImg).toBeDisplayed();
    })

    it("Verify Hamburger Menu Options and selct product and Purches It",async ()=>{
        AllureReporter.addStep('Click on hamburger icon', true);
        await homePage.hamburgerIcon.click();
        AllureReporter.addStep('Select Option from Hamburger Menu', true);
        await hamburgerPage.selectExpandAndCollapsIcon('men1').click();
        await hamburgerPage.selectAnyOptionFromMenOrWomen('men-topwear').click();
        await hamburgerPage.selectAnyOptionFromHamburgerMenu("Shirts");
        await hamburgerPage.waitForPage();
        AllureReporter.addStep('Geting Data From Xlsx file and Sheet', true);
        const excelData = await xlsxReader.readDatafromExcel('test/Data/demo.xlsx', 'Sheet1');
        AllureReporter.addStep('Click on Product', true);
        await collectionsPage.selectProductByName(excelData[0].ProductName);
        await collectionsPage.selectSizeOption(excelData[0].Size);
        await collectionsPage.addToCartBtn.scrollIntoView();
        AllureReporter.addStep('Click on Add to Cart Button', true);
        await collectionsPage.addToCartBtn.click();
        await cart.increaseItemBtn.click();
        AllureReporter.addStep("Clcik on close cart button",true);
        await cart.closeCartBtn.click();
        await expect(homePage.hamburgerIcon).toBeDisplayed();
    })

})