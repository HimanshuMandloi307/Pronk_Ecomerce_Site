import { $, browser } from '@wdio/globals';

class quickBuyPage{

    selectProduct(){
        return $$(`[class="grid-product__link"]`);
    }
    selectProductByQuickBuyButton(productName) {
        return $(`(//div[contains(text(),'${productName}')]/parent::div/parent::a/preceding-sibling::div)[2]//button`);
    }

    get quickBuyPopProductHeader(){
        return $(`#ProductSection-template--16362792517676__main-7685435719724  div > div:nth-child(2) div.product-block.product-block--header > p`);
    }

    async selectProductByName(productName){
        const products = await this.selectProduct(); //130 locators 
        for(let product of products){ // 1-1-1-1-1--1-1 locator 
            const productText = await product.getText();
            if (productText.includes(productName)) {
                // await product.isClickable();
                await browser.pause(5000);
                await this.selectProductByQuickBuyButton(productName).moveTo();
                await browser.pause(20000);
                await this.selectProductByQuickBuyButton(productName).waitForClickable();
                await this.selectProductByQuickBuyButton(productName).click();
                break;
            }
        }
    }

}

export default new quickBuyPage();