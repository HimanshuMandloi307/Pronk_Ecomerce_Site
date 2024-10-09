import { $ } from '@wdio/globals';

class contactPage{

    get nameInputFiled(){
        return $(`[name="contact[name]"]`);
    }

    get emailInputFiled(){
        return $(`(//div/input[@type="email"])[1]`);
    }

    get messageInputFiled(){
        return $(`[name="contact[body]"]`);
    }

    get sendBtn(){
        return $(`//button[contains(text(),'Send')]`)
    }

    get sucessNote(){
        return $(`[class="note note--success"]`);
    }

    get getDetails(){
        return $(`//div/b[contains(text(),'Get In Touch!')]`);
    }

    get telePhoneNumber(){
        return $(`//a[@href="tel:+91%2077430%2006540"]`);
    }

    get emailId(){
        return $(`[href="mailto:support@teeshut.in"]`)
    }

    // page Mthods

    async waitforPage(){
        await this.emailInputFiled.waitForDisplayed();
        await this.nameInputFiled.waitForDisplayed();
        await this.messageInputFiled.waitForDisplayed();
    }

    async addValueInInputFileds(email,name,message){
        await this.emailInputFiled.addValue(email);
        await this.nameInputFiled.addValue(name);
        await this.messageInputFiled.addValue(message);
    }

}

export default new contactPage();