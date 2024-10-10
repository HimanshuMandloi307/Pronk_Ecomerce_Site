import { $ } from '@wdio/globals';

class homePage{

    get homepageTitle(){
        return $(`//h2[contains(text(),'PRONK FESTIVE SALE | Extra 25% OFF')]`);
    }

    get hamburgerIcon(){
        return $(`[class="icon icon-hamburger"]`);
    }

    get logoImg(){
        return $(`(//image-element/img[@itemprop="logo"])[2]`);
    }


    // page Mthods

    async waitForPage(){
        await this.homepageTitle.waitForDisplayed();
        await this.hamburgerIcon.waitForDisplayed();
        await this.logoImg.waitForDisplayed();
    }
}
export default new homePage();