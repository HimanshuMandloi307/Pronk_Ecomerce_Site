import { $ } from '@wdio/globals';

class aboutPage{

    get title(){
        return $(`//div/h1/b[contains(text(),'PRONK')]`);
    }

    get heroImage(){
        return $(`[class="hero__image-wrapper hero__image-wrapper--no-overlay"]`);
    }

    get fadeImage(){
        return $(`(//div[@class="image-wrap text-spacing loaded"])[1]`);
    }

    get conatintText(){
        return $(`(//div/div/b)[1]`);
    }
}

export default new aboutPage();