import { Page, test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";

test.beforeEach(async({page}) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
     await loginPageobj.login(Credentials[0].username,Credentials[0].password,Credentials[0].captcha,Credentials[0].otp);

});

test('homepage validation',{tag:"@homepage"}, async({ page }) => {
    
    const HomePageobj = new homePage(page);
    await HomePageobj.HomepageValidation();
    
});