import { test as setup, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import data from "../testData/loginData.json"
import { STORAGE_STATE } from '../playwright.config';


setup('login to application',{tag:"@login"}, async({ page }) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.login(data.username,data.password,data.captcha,data.otp);

    await page.context().storageState({path:STORAGE_STATE});
    
});


