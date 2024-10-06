import { default as homePage } from "../pageobjects/home.page";
import fotterPage from "../pageobjects/fotter.page";
import { expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import exchangeAndReturnPage from "../pageobjects/exchangeAndReturn.page.js";


describe("Verify footer and goto Contact Page", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
        //Logout Code
    })

    it("Verify and Click on Exchange And Return Page",async()=>{
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectReturnAndExchangeOptionFromFooter.click();
    })

    it("Verify InputFileds and Enter Details",async()=>{
        await exchangeAndReturnPage.waitforPage();
        await exchangeAndReturnPage.addValueInInputFileds("0001001","9770648269");
        await exchangeAndReturnPage.requestBtn.click();
        await expect(exchangeAndReturnPage.alertText).toHaveText(expect.stringContaining('please enter the correct details'));
    })

})