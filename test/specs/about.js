import { default as homePage } from "../pageobjects/home.page";
import fotterPage from "../pageobjects/fotter.page";
import { browser, expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import aboutPage from "../pageobjects/about.page.js";
import catalogPage from "../pageobjects/catalog.page.js";
import AllureReporter from "@wdio/allure-reporter";


describe("Verify footer and goto About Page", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })
     beforeEach(async()=>{
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectItemFromFooterMenu("about-us").click();
        await expect(browser).toHaveUrl(expect.stringContaining('about-us'))

     })

     afterEach(async()=>{
        await browser.refresh();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
    })

    it("Verify and Click on About Page",async()=>{
        await aboutPage.heroImage.waitForDisplayed();
        await expect(aboutPage.title).toHaveText("PRONK");
        AllureReporter.addStep('Verify Page Title',true);
        await expect(aboutPage.conatintText).toHaveText(expect.stringContaining('Introducing Pronk'));
    })

    it("Verify images and click on images",async()=>{
        await aboutPage.fadeImage.click();
        AllureReporter.addStep('Click on fade Image',true);
        await expect(browser).toHaveUrl(expect.stringContaining('collections'));
        await catalogPage.sectionHeaderText.waitForDisplayed();
        await catalogPage.selectCatalogName('all-graphics');
        AllureReporter.addStep('Select Item from Catalog',true);
    })

})