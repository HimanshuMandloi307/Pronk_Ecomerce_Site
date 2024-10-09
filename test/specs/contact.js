import { default as homePage } from "../pageobjects/home.page";
import fotterPage from "../pageobjects/fotter.page";
import { expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import contactPage from "../pageobjects/contact.page.js";
import AllureReporter from "@wdio/allure-reporter";


describe("Verify footer and goto Contact Page", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

     beforeEach(async() =>{
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectItemFromFooterMenu("contact").click();
        await expect(browser).toHaveUrl(expect.stringContaining('contact'));
     })

     afterEach(async()=>{
        await browser.refresh();
     })

    after(async () =>{
        console.log("Thank you for Contacting Us. !!!!!!!!!!!!!!!!");
    })

    it("Verify and Click on About Page",async()=>{
        await contactPage.waitforPage();
        await contactPage.addValueInInputFileds("himanshu57@gmail.com","Ansh","Hello i am root");
        AllureReporter.addStep("Enter Contact Details",true);
        await contactPage.sendBtn.click();
        AllureReporter.addStep("Click on send Button",true);
        await expect(contactPage.sucessNote).toHaveText(expect.stringContaining('Thanks for contacting us'));
        AllureReporter.addStep("Verify sucessful messeage",true);
    })

    it("Verify InputFileds and send Message",async()=>{
        await contactPage.waitforPage();
        await contactPage.getDetails.scrollIntoView();
        await expect(contactPage.telePhoneNumber).toHaveText('+91 77430 06540');
        await expect(contactPage.emailId).toHaveText('support@pronk.in');
        AllureReporter.addStep("Verify TelePhone Number and Email Id",true);
    })

})