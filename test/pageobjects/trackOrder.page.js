import { $ } from '@wdio/globals';

class trackOrderPage{

    get headertitle(){
        return $(`//h1[contains(text(),'Track your order')]`);
    }

    get trackOrderBtn(){
        return $(`//button[@type="button"]`);
    }

    get orderIdInputFiled(){
        return $(`[name="trackingNumber"]`);
    }

     radioBtn(OptonName){
        return $(`//input[@type='radio' and @value='${OptonName}']`);
    }

    get orderTrackingDeatils(){
        return $(`[class="css-h54b4a"]`);
    }

    get VerifyTrackingIdNo(){
        return $(`class="chakra-text css-1vg6q84"`);
    }
}

export default new trackOrderPage();