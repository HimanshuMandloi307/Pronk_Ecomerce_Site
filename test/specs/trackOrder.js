import { default as homePage } from "../pageobjects/home.page.js";
import fotterPage from "../pageobjects/fotter.page.js";
import { browser, expect } from '@wdio/globals';
import { config as baseConfig } from "../../wdio.conf.js";
import trackOrderPage from "../pageobjects/trackOrder.page.js";
import AllureReporter from "@wdio/allure-reporter";


describe("Verify footer and goto Contact Page", () => {

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
    })

    beforeEach(async()=>{
        await browser.refresh();
    })

    afterEach(async()=>{
        await browser.refresh();
    })

    after(async () => {
        console.log("Thank you !!!!!!!!!!!!!!!!");
    })

    it("Verify HeadlineTitle and Ttile on TrackOrder Page", async () => {
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectTrackOrderOptionFromFooter.click();
        AllureReporter.addStep("Click on Track Order Option form Footer",true);
        await expect(browser).toHaveTitle(expect.stringContaining('UniShipper'));
        await expect(browser).toHaveUrl(expect.stringContaining('tracking'));
        await trackOrderPage.headertitle.waitForDisplayed();
        AllureReporter.addStep("Verify Headline and tittle on the page",true);
    })

    it("Verify InputFileds and Check Order Details", async () => {
        await trackOrderPage.selectSearchByOptions('awb');
        AllureReporter.addStep("Select option from Serach by",true);
        await trackOrderPage.orderIdInputFiled.addValue('123456');
        const IdValue = await trackOrderPage.orderIdInputFiled.getValue();;
        AllureReporter.addStep("Add Details In InputFileds",true);
        await trackOrderPage.trackOrderBtn.click();
        AllureReporter.addStep("Click on track order button");
        await expect(trackOrderPage.TrackingIdNo).toHaveText(expect.stringContaining(IdValue));
        AllureReporter.addStep("Verify and Check Order or Awb number matched",true);
        await expect(trackOrderPage.orderTrackingDeatils).toHaveText(expect.stringContaining('order number entered is incorrect'));
        AllureReporter.addStep("Show Order Tracking Details",true);
    })

})