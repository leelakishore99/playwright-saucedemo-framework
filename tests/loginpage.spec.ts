import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginpage'
import data from '../data/credentials.json';

test.describe('SauceDemo Data-Driven Authentication Suite',()=>{
for(const loginData of data){

test(`Validate login page behavior for: ${loginData.scenario}`,async({page})=>{

const sauce = new loginPage(page);
await sauce.siteUrl('https://www.saucedemo.com/');
await sauce.login(loginData.username,loginData.password);

//1)Pass Scenario
if(loginData.scenario == "Valid Login"){
    await expect(sauce.locateByXpath('.title')).toHaveText('Products');
}
//2)Fail Scenario
else if(loginData.scenario == "Invalid Login"){
    await expect(page).toHaveURL('https://www.saucedemo.com/');
}

});
}
});
