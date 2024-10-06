import { $ } from '@wdio/globals';

class aboutPage{

    get title(){
        return $(`//div/h1/b[contains(text(),'PRONK')]`);
    }

    get heroImage(){
        return $(`[class="hero__image-wrapper hero__image-wrapper--no-overlay"]`);
    }

}

export default new aboutPage();