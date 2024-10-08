import { $ } from '@wdio/globals';

class LoginPage {

    get LoginPageTitle(){
        return $(`//h1[contains(text(),'Log in')]`);
    }
   
    get inputEmail () {
        return $('#account_email');
    }

    get ContinueBtn () {
        return $('//span[@class="ui-button__text"]');
    }

    get uiheading(){
        return $(`(//h1[@class="ui-heading"])[1]`);
    }

   
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

export default new LoginPage();
