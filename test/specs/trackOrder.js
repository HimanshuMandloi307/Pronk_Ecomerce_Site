import { default as homePage } from "../pageobjects/home.page.js";
import fotterPage from "../pageobjects/fotter.page.js";
import { expect } from '@wdio/globals';
import { config as baseConfig } from "../../wdio.conf.js";
import trackOrderPage from "../pageobjects/trackOrder.page.js";


describe("Verify footer and goto Contact Page", () => {

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
    })

    after(async () => {
        console.log("Thank you !!!!!!!!!!!!!!!!");
        //Logout Code
    })

    it("Verify and Click on Track Order Page", async () => {
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectTrackOrderOptionFromFooter.click();
        await expect(browser).toHaveUrl(expect.stringContaining('tracking'));
    })

    it("Verify InputFileds and Check Order Details", async () => {
        await trackOrderPage.headertitle.waitForDisplayed();
        // await trackOrderPage.radioBtn('awb').click();
        await trackOrderPage.orderIdInputFiled.click();
        await trackOrderPage.orderIdInputFiled.addValue('123456');
        await trackOrderPage.trackOrderBtn.click();
        // await expect(trackOrderPage.VerifyTrackingIdNo.getValue()).toEqual(OrderID);
        await expect(trackOrderPage.orderTrackingDeatils).toHaveText(expect.stringContaining('order number entered is incorrect'));
    })

})