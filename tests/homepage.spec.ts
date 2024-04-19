import { Page, test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { loginPage } from '../pages/loginPage';
import data from "../testData/loginData.json"

test.beforeEach(async({page}) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.login(data.username,data.password,data.captcha,data.otp);
});

test('homepage validation',{tag:"@homepage"}, async({ page }) => {
    
    const HomePageobj = new homePage(page);
    await HomePageobj.HomepageValidation();
    
});