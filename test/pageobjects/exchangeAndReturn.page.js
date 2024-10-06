import { $ } from '@wdio/globals';

class ReturnAndExchange{
    get orderIdInputFileds(){
        return $(`[name="vendor_order_id"]`);
    }

    get emailOrPhoneNoInputFileds(){
        return $(`[placeholder="Enter Phone/Email ID"]`)
    }
    get requestBtn(){
        return $(`//button[contains(text(),'Request')]`);
    }

    get alertText(){
        return $(`[role="alert"]`);
    }

    async waitforPage(){
        await this.orderIdInputFileds.waitForDisplayed();
        await this.emailOrPhoneNoInputFileds.waitForDisplayed();
    }

    async addValueInInputFileds(OrderId,emailOrPhone){
        await this.orderIdInputFileds.addValue(OrderId);
        await this.emailOrPhoneNoInputFileds.addValue(emailOrPhone);
    }
}

export default new ReturnAndExchange();