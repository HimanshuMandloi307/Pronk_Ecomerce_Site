import { browser, expect } from '@wdio/globals';
import { config as baseConfig } from "../../wdio.conf.js";
import homePage from '../pageobjects/home.page.js';
import AllureReporter from '@wdio/allure-reporter';
import hamburgerPage from '../pageobjects/hamburger.Page.js';
import collectionsPage from '../pageobjects/collections.page.js';
import xlsxReader from '../utility/readDataFromexcel.js';
import quickBuyPage from '../pageobjects/quickBuy.page.js';
import cart from '../pageobjects/cart.js';
import ordersummaryPage from '../pageobjects/ordersummary.page.js';

describe("Selct Product From Quick Buy option and Purches product", () => {

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

    after(async () => {
        console.log("Thank You For Visit !!!!")
    })

    it("Verify Product Details like ProductName,Size,Color and Payment on Payment Page", async () => {
        AllureReporter.addStep('Click on hamburger icon', true);
        await homePage.hamburgerIcon.click();
        AllureReporter.addStep('Select option from Hamburger Option', true);
        await hamburgerPage.selectExpandAndCollapsIcon('men1').click();
        await hamburgerPage.selectAnyOptionFromMenOrWomen('men-topwear').click();
        await hamburgerPage.selectAnyOptionFromHamburgerMenu("Shirts");
        await hamburgerPage.waitForPage();
        AllureReporter.addStep('Geting Data From Xlsx file and Sheet', true);
        const excelData = await xlsxReader.readDatafromExcel('test/Data/demo.xlsx', 'Sheet1');
        AllureReporter.addStep('Click on selected ProductName', true);
        await quickBuyPage.selectProductByName(excelData[0].ProductName);
        await expect(quickBuyPage.quickBuyPopProductHeader).toHaveText(excelData[0].ProductName.toUpperCase());
        await collectionsPage.selectSizeOption(excelData[0].Size);
        await collectionsPage.addToCartBtn.scrollIntoView();
        AllureReporter.addStep('Click on Add to Cart Button', true);
        await collectionsPage.addToCartBtn.click();
        await cart.increaseItemBtn.click();
        const price = await cart.productSubTotalPrice.getText();
        console.log('====' +await ordersummaryPage.orderSummary.isDisplayed());
        AllureReporter.addStep('Click on PlaceOrder button', true);
        await collectionsPage.placeOrderBtn.click();
        // await browser.pause(10000);
        // await ordersummaryPage.orderSummaryIFrame.waitForDisplayed();
        // await browser.switchToFrame(await ordersummaryPage.orderSummaryIFrame);
        // console.log('====' +await ordersummaryPage.orderSummary.isDisplayed());
        // await ordersummaryPage.orderSummary.waitForDisplayed();
        // await browser.pause(5000);
        // await ordersummaryPage.orderSummary.click();
        // await ordersummaryPage.subTotal.waitForDisplayed();
        // console.log("ordersummary payment>>>>>>>>>"+ordersummaryPage.subTotal.getText());
        // await expect(ordersummaryPage.subTotal).toHaveText(price);
        // await browser.pause(5000);
    })


})