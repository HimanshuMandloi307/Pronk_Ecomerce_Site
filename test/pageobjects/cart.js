import { $ } from '@wdio/globals';

class cart{

    get increaseItemBtn(){
        return $(`[aria-label="Increase item quantity by one"]`);
    }

    get productSubTotalPrice(){
        return $(`//div[@data-subtotal]`);
    }

    get closeCartBtn(){
        return $(`(//button[@class="drawer__close-button js-drawer-close"])[2]`);
    }

    get cardTitle(){
        return $(`//div[contains(text(),'Cart')]`);
    }
}

export default new cart();