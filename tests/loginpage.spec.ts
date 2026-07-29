import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage'
import data from '../data/credentials.json';

test.describe('SauceDemo Data-Driven Authentication Suite',()=>{
for(const loginData of data){

test(`Validate login page behavior for: ${loginData.scenario}`,async({page})=>{
const sauce = new LoginPage(page);
await sauce.siteUrl('https://www.saucedemo.com/');
await sauce.login(loginData.username,loginData.password);

});
}
});
