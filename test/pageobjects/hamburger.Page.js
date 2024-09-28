import {$} from '@wdio/globals';;

class hamburgerMenu{

    get dropDownIcon(){
        return $(`[aria-labelledby="Label-collections-men1"]`);
    }

     subMenuOptions(){
        return $$(`[class="mobile-nav__link"]`);
    }

    get filterBtn(){
        return $(`[aria-controls="FilterDrawer"]`);
    }

    get sortByOption(){
        return $(`#SortBy`);
    }



    // page Mthods

    async waitForPage(){
        await this.filterBtn.waitForDisplayed();
        await this.sortByOption.waitForDisplayed();
    }

    async selectAnyOptionFromHamburgerMenu(OptionName) {
        const navigationLocator = await this.subMenuOptions();  // Assuming this returns an array of elements
        let optionClicked = false;
    
        for (let temp of navigationLocator) {
            const singleOptionText = await temp.getText();
            if (singleOptionText === OptionName) {
                await temp.click();
                console.log("Selected Option Name: " + singleOptionText);
                optionClicked = true;
                break;
            }
        }
    
        // Proceed with URL verification only if an option was clicked
        if (optionClicked) {
            const timeout = 10000;
    
            // Wait until the URL contains the expected value
            await browser.waitUntil(
                async () => {
                    const currentUrl = await browser.getUrl();
                    return currentUrl.includes(OptionName);
                },
                {
                    timeout: timeout,
                    timeoutMsg: `Expected URL to contain "${OptionName}" but timed out after ${timeout}ms`
                }
            );
    
            // Optionally assert the URL contains the option name after wait
            await expect(browser).toHaveUrlContaining(OptionName);
        } else {
            console.log("Option not found in the menu: " + OptionName);
        }
    }
    

}

export default new hamburgerMenu();