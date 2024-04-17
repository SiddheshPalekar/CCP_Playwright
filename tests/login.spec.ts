import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import data from "../testData/loginData.json"


test('login to application',{tag:"@login"}, async({ page }) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.login(data.username,data.password,data.captcha,data.otp);
    
});
test('validate back to login page button',{tag:"@back_button"}, async({ page }) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.backtologin(data.username,data.password,data.captcha);
    
});
