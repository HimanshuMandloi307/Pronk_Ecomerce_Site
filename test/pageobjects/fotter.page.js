import { $ } from '@wdio/globals';

class footer{

    get footer(){
        return $(`[class="grid__item footer__item--footer-1"]`);
    }

    get selectReturnAndExchangeOptionFromFooter(){
        return $(`//a[contains(text(),'Create Return/Exchange')]`);
    }

    get selectTrackOrderOptionFromFooter(){
        return $(`//ul[@class="no-bullets site-footer__linklist"]//a[contains(text(),'Track Order')]`);
    }

    selectItemFromFooterMenu(PageName){
        return $(`//a[@href="/pages/${PageName}"]`);
    }

}

export default new footer();