import { default as homePage } from "../pageobjects/home.page";
import fotterPage from "../pageobjects/fotter.page";
import { browser, expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import exchangeAndReturnPage from "../pageobjects/exchangeAndReturn.page.js";
import AllureReporter from "@wdio/allure-reporter";


describe("Verify footer and goto Contact Page", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

     beforeEach(async() =>{
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectReturnAndExchangeOptionFromFooter.click();
     })

     afterEach(async() =>{
        await browser.refresh();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
    })

    it("Verify Tittle on Exchange And Return Page",async()=>{
        await expect(exchangeAndReturnPage.headlineTitle).toBeDisplayed();
        await expect(exchangeAndReturnPage.headlineSubTitle).toHaveText('Enter your order details to raise the request');
        AllureReporter.addStep("Verify Headline and SubHeadline to Be Displayed",true);
    })

    it("Verify InputFileds and Enter Details",async()=>{
        await exchangeAndReturnPage.waitforPage();
        await exchangeAndReturnPage.addValueInInputFileds("0001001","9770648269");
        AllureReporter.addStep("Verify and Enter Order Details",true);
        await exchangeAndReturnPage.requestBtn.click();
        AllureReporter.addStep("Click on Request Button",true);
        await expect(exchangeAndReturnPage.alertText).toHaveText(expect.stringContaining('please enter the correct details'));
        AllureReporter.addStep("Verify Alert Message",true);
    })

})