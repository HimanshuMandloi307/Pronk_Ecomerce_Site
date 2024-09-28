import { $ } from '@wdio/globals';

class homePage{

    get homepageTitle(){
        return $(`//h2[contains(text(),'PRONK FESTIVE SALE ends in')]`);
    }

    get hamburgerIcon(){
        return $(`[class="icon icon-hamburger"]`);
    }


    // page Mthods

    async waitForPage(){
        await this.homepageTitle.waitForDisplayed();
        await this.hamburgerIcon.waitForDisplayed();
    }
}
export default new homePage();