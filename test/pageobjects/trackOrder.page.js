import { $ } from '@wdio/globals';

class trackOrderPage{

    get headertitle(){
        return $(`//h1[contains(text(),'Track your order')]`);
    }

    get trackOrderBtn(){
        return $(`//button[@type="button"]`);
    }

    get orderIdInputFiled(){
        return $(`[name="trackingNumber"]`);
    }

    searchByBtns(){
        return $$('[class="chakra-text css-1v4xcoh"]');
    }

    get orderTrackingDeatils(){
        return $(`[class="css-h54b4a"]`);
    }

    get TrackingIdNo(){
        return $(`//p[@class="chakra-text css-1vg6q84"]`);
    }

    // Page Methods

    async selectSearchByOptions(OptionName){
        const navigationLocator = await this.searchByBtns();
        for (let temp of navigationLocator) {
            const singleOptionText = await temp.getText();
            if (singleOptionText === OptionName) {
                await temp.click();
                console.log("Selected Option Name: " + singleOptionText);
                break;
            }
        }
    }
}

export default new trackOrderPage();