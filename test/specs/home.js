import { expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import homePage from "../pageobjects/home.page";
import hamburgerPage from '../pageobjects/hamburger.Page.js';
import collectionsPage from '../pageobjects/collections.page.js';
import cart from '../pageobjects/cart.js';
import xlsxReader from '../utility/readDataFromexcel.js';
import AllureReporter from '@wdio/allure-reporter';

describe("", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

    after(async () =>{
        console.log("Thank You For Visit !!!!")
    })

    it("Select Options from Hamburgermenu",async ()=>{
        await homePage.hamburgerIcon.click();
        AllureReporter.addStep('Click on hamburger icon', true);
        await hamburgerPage.selectExpandAndCollapsIcon('men1').click();
        await hamburgerPage.selectAnyOptionFromMenOrWomen('men-topwear').click();
        await hamburgerPage.selectAnyOptionFromHamburgerMenu("Shirts");
        AllureReporter.addStep('Click on Hamburger Option', true);
        await hamburgerPage.waitForPage();
        const excelData = await xlsxReader.readDatafromExcel('test/Data/demo.xlsx', 'Sheet1');
        AllureReporter.addStep('Geting Data From Xlsx file and Sheet', true);
        await collectionsPage.selectProductByName(excelData[0].ProductName);
        AllureReporter.addStep('Click on Product', true);
        await collectionsPage.selectSizeOption(excelData[0].Size);
        await collectionsPage.addToCartBtn.scrollIntoView();
        await collectionsPage.addToCartBtn.click();
        AllureReporter.addStep('Click on Add to Cart Button', true);
        await cart.increaseItemBtn.click();
        await collectionsPage.placeOrderBtn.click();
        AllureReporter.addStep('Click on PlaceOrder button', true);
    })

})