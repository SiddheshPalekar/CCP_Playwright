import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import Excelutils  from "../utils/Excelutils.ts";
// import Excelutils from "@utils/Excelutils";

const SHEET = "LoginTest";
let home: loginPage;
test.beforeEach(async ({ page }) => {
    home = new loginPage(page);
});
const data1 = Excelutils.getTestData(SHEET, "TC01_ValidLogin");

test('validate back to login page button',{tag:"@back_button"}, async({ page }) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.backtologin(Credentials[0].username,Credentials[0].password,Credentials[0].captcha);
    
});

test('invalid credentials',{tag:"@invalid_cred"},async({page}) => {
    const loginPageobj = new loginPage(page);
    await loginPageobj.openApplication();
    await loginPageobj.invalidlogin(Credentials[1].username,Credentials[1].password,Credentials[1].captcha,Credentials[1].otp);

});