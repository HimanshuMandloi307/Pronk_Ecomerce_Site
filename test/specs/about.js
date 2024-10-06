import { default as homePage } from "../pageobjects/home.page";
import fotterPage from "../pageobjects/fotter.page";
import { expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import aboutPage from "../pageobjects/about.page.js";


describe("Verify footer and goto About Page", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        // await browser.saveScreenshot('./screenshot/fullPage111.png');
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
        //Logout Code
    })

    it("Verify and Click on About Page",async()=>{
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectItemFromFooterMenu("about-us").click();
        await browser.pause(5000);
        await expect(browser).toHaveUrl(expect.stringContaining('about-us'))
    })

    it("Verify Text in About Page",async()=>{
        await aboutPage.heroImage.waitForDisplayed();
        await expect(aboutPage.title).toHaveText("PRONK");
    })

})