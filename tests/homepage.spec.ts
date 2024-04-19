import { Page, test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";

test.beforeEach(async({page}) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
<<<<<<< Updated upstream
    // await loginPageobj.login(data.username,data.password,data.captcha,data.otp);
    // await loginPageobj.login(data[0].username,data[0].password,data[0].captcha,data[0].otp);
     await loginPageobj.login(Credentials[0].username,Credentials[0].password,Credentials[0].captcha,Credentials[0].otp);

});

test('homepage validation',{tag:"@homepage"}, async({ page }) => {
    
    const HomePageobj = new homePage(page);
    await HomePageobj.HomepageValidation();
    
});