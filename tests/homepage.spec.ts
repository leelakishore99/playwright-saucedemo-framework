import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import data from '../data/credentials.json';

test('Homepage Work flow',async({page})=>{
//LoginPage    
const loginpage = new LoginPage(page);
await loginpage.siteUrl('https://www.saucedemo.com/');
await loginpage.login(data[0].username,data[0].password);

//HomePage
const homepage = new HomePage(page);
await homepage.selectProduct('Sauce Labs Backpack');
await homepage.selectProduct('Sauce Labs Bike Light');

await expect(homepage.cartLogo).toHaveText('2');

});