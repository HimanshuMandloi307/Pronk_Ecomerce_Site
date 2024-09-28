import { $ } from '@wdio/globals';

class header{

    get accountIcon(){
        return $(`[class="icon icon-user"]`);
    }

    get bagIcon(){
        return $(`[class="icon icon-bag"]`);
    }

}

export default new header();