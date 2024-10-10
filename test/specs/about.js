import { default as homePage } from "../pageobjects/home.page";
import fotterPage from "../pageobjects/fotter.page";
import { browser, expect } from '@wdio/globals';
import { config as baseConfig }from "../../wdio.conf.js";
import aboutPage from "../pageobjects/about.page.js";
import catalogPage from "../pageobjects/catalog.page.js";
import AllureReporter from "@wdio/allure-reporter";


describe("Verify footer menu and goto About Page", () =>{

    before(async () => {
        await browser.url(baseConfig.baseUrl);
        await browser.maximizeWindow();
        await homePage.waitForPage();
     })
     beforeEach(async()=>{
        await fotterPage.footer.scrollIntoView();
        await fotterPage.selectItemFromFooterMenu("about-us").click();
     })

     afterEach(async()=>{
        await browser.refresh();
     })

    after(async () =>{
        console.log("Thank you !!!!!!!!!!!!!!!!");
    })

    it("Verify page title on about-us page",async()=>{
        await aboutPage.heroImage.waitForDisplayed();
        AllureReporter.addStep('Verify Page Title',true);
        await expect(aboutPage.title).toHaveText("PRONK");
        await expect(aboutPage.conatintText).toHaveText(expect.stringContaining('Introducing Pronk'));
    })

    it("Verify images and click on images in about page",async()=>{
        AllureReporter.addStep('Click on fade Image',true);
        await aboutPage.fadeImage.click();
        await expect(browser).toHaveUrl(expect.stringContaining('collections'));
        await catalogPage.sectionHeaderText.waitForDisplayed();
        AllureReporter.addStep('Select Item from Catalog',true);
        const url = await catalogPage.selectCatalogName('all-graphics');
        // let t = 'all-graphics';
        // await catalogPage.catalogCollections(t).click();
        // await expect(browser).toHaveUrl(expect.stringContaining(t.toLowerCase()));
    })

})