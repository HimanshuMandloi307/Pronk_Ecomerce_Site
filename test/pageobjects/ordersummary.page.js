import { $, browser } from '@wdio/globals';

class orderSummary{

    // get expandOrderSummaryIcon(){
    //     return $(`//div/span[@class=" globalImg arrow false svelte-1e6xyq"]`);
    // }

    get subTotal(){
        return $(`(//div[@class="order-summary-details svelte-wrttvl"]/ul/li/span)[2]`);
    }

    get orderSummaryIFrame(){
        return $(`[title="Checkout window"]`);
    }

    get orderSummary(){
        return $(`.summary-title-inner`);
    }

    get continueBtn(){
        return $(`#continue-button`);
    }

    get paymentOption(){
        return $(`//div/span[contains(text(),'Payment Options')]`);
    }

    get crossPageIcon(){
        return $(`//span[contains(@class, 'globalImg')]/parent::div/ancestor::button`);
    }

}

export default new orderSummary();