import { default as homePage } from "../pageobjects/home.page";
import fotterPage from "../pageobjects/fotter.page";
import { expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import contactPage from "../pageobjects/contact.page.js";


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

    it("Verify and Click on About Page",async()=>{
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectItemFromFooterMenu("contact").click();
        await browser.pause(5000);
        await expect(browser).toHaveUrl(expect.stringContaining('contact'))
    })

    it("Verify InputFileds and send Message",async()=>{
        await contactPage.waitforPage();
        await contactPage.addValueInInputFileds("himanshu57@gmail.com","Ansh","Hello i am root");
        await contactPage.sendBtn.click();
    })

})