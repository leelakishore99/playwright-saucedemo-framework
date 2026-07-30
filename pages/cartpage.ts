import {Page,Locator} from '@playwright/test';
import { baseClass } from './basepage';

export class CartPage extends baseClass{

    public products:Locator;
    public checkout:Locator;

    constructor(page:Page){
        super(page);
        this.products = this.locateByXpath('//div[@class="cart_item"]/descendant::a/child::div');
        this.checkout = this.locateByXpath('//button[@id="checkout"]');
    }

    async prdCheckout(){
        await this.checkout.click();
    }
}