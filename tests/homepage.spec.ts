import { Page, test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import Excelutils  from "../utils/Excelutils.ts";

test.beforeEach(async({page}) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.login(Credentials[0].username,Credentials[0].password,Credentials[0].captcha,Credentials[0].otp);

});

const SHEET = "LoginTest";
let home: loginPage;
test.beforeEach(async ({ page }) => {
    home = new loginPage(page);
});
const data1 = Excelutils.getTestData(SHEET, "TC01_ValidLogin");

test(`${data1.TestID} - ${data1.Description}`, async ({}) => {
    // Allure.attachDetails(data1.Description, data1.Issue);
    await home.openApplication();
    await home.login(data1.UserName, data1.Password, data1.Captcha , data1.OTP);
    // await home.validateLogin(data1.UserName);
    // await home.logout();
});

test('homepage validation',{tag:"@homepage"}, async({ page }) => {
    
    const HomePageobj = new homePage(page);
    await HomePageobj.HomepageValidation();
    
});