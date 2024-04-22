import { test as setup, test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import { STORAGE_STATE } from '../playwright.config';
import Excelutils  from "../utils/Excelutils.ts";

const SHEET = "LoginTest";
let home: loginPage;
test.beforeEach(async ({ page }) => {
    home = new loginPage(page);
});
const data1 = Excelutils.getTestData(SHEET, "TC01_ValidLogin");



setup(`${data1.TestID} - ${data1.Description}`,{tag:"@login"}, async ({page}) => {
    // Allure.attachDetails(data1.Description, data1.Issue);
    await home.openApplication();
    await home.login(data1.UserName, data1.Password, data1.Captcha , data1.OTP);
    await page.context().storageState({path:STORAGE_STATE});
    // await home.validateLogin(data1.UserName);
    // await home.logout();
});