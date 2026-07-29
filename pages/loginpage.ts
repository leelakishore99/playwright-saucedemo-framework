import {Page,Locator} from '@playwright/test';
import { baseClass } from '../pages/basepage';

export class LoginPage extends baseClass{
    private userNameField: Locator;
    private passwordField: Locator
    private loginBtn: Locator;

    constructor(page:Page){
        super(page);
        this.userNameField = this.locateByXpath('#user-name');
        this.passwordField = this.locateByXpath('#password');
        this.loginBtn = this.locateByXpath('#login-button');
    }

    async siteUrl(url:string){
        await this.openUrl(url);
    }
    async login(userName:string,passWord:string){
    
        await this.userNameField.fill(userName);
        await this.passwordField.fill(passWord);
        
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.loginBtn.click()
        ]);

    }
} 