import { test as setup, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import { STORAGE_STATE } from '../playwright.config';


setup('login to application',{tag:"@login"}, async({ page }) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.login(Credentials[0].username,Credentials[0].password,Credentials[0].captcha,Credentials[0].otp);

    await page.context().storageState({path:STORAGE_STATE});
    
});


