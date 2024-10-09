import { $, browser, expect } from '@wdio/globals';

class Catalog{

    get sectionHeaderText(){
        return $(`//header/h1[contains(text(),'Catalog')]`);
    }

     catalogCollections(CatalogName){
        return $(`//a[@href="/collections/${CatalogName}"]`)
    }

    async selectCatalogName(CatalogName){
        await this.catalogCollections(CatalogName).click();
        await browser.pause(5000);
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(CatalogName.toLowerCase());
    }

}

export default new Catalog();