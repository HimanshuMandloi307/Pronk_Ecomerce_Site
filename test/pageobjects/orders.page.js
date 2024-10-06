import {$} from '@wdio/globals';

class ordersPage{

    get showAccountMenuBtn(){
        return $(`[aria-label="Show Account menu"]`);
    }

    accountBtnMenu(OptionName){
        return $(`[href="/55200677932/account/${OptionName}"]`);
    }

    get logoutBtn(){
        return $(`//button/span[contains(text(),'Log out')]`);
    }
}

export default new ordersPage();