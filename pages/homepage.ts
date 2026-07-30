import {Page,Locator} from '@playwright/test';
import { baseClass } from './basepage';

export class HomePage extends baseClass{
    public cartLogo:Locator;
    public cartLink:Locator;

    constructor(page:Page){
        super(page);
        this.cartLogo = this.locateByXpath('.shopping_cart_badge');
        this.cartLink = this.locateByXpath('.shopping_cart_link');
    }

    async selectProduct(productName: string) {
        const productLocator = this.locateByXpath(
            `//div[@class="inventory_item_name "][text()="${productName}"]/ancestor::div[@class="inventory_item_description"]/div[@class="pricebar"]/button`
        );
        await productLocator.click();
    }
    async clickCart(){
        await this.cartLink.click();
    }
}//Sauce Labs Backpack
