import { $ } from '@wdio/globals';

class cart{

    get increaseItemBtn(){
        return $(`[aria-label="Increase item quantity by one"]`);
    }

}

export default new cart();