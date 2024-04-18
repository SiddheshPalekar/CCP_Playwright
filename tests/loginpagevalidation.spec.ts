import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import data from "../testData/loginData.json"


test('validate back to login page button',{tag:"@back_button"}, async({ page }) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.backtologin(data.username,data.password,data.captcha);
    
});