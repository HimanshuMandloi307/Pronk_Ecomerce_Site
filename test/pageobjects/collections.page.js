import { $ } from '@wdio/globals';

class collections{

    selectProduct(){
        return $$(`[class="grid-product__link"]`);
    }

     selctSize(){
        return $$(`[class="variant-input"]`);
    }

    get addToCartBtn(){
        return $(`//span[contains(text(),'Add to cart')]`);
    }

    get placeOrderBtn(){
        return $(`//span[contains(text(),'Place Order')]`);
    }



    // Page Method

    async selectProductByName(productName){

        const products = await this.selectProduct();
        for(let product of products){
            console.log("inside loop ");
            const productText = await product.getText();
            if (productText === productName) {
                await product.click();
                console.log("Selected Option Name: " + productText);
                break;
            }
        }
    }

    async selectSizeOption(size){

        const ProductSize = await this.selctSize();
        for(let temp of ProductSize){
            const productSizeText = await temp.getText();
            if(productSizeText == size){
                await temp.click();
                console.log("Select Product Size"+ productSizeText);
                break;
            }
        }
    }
}

export default new collections();