import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";
import { bankUser } from '../pages/BankUser.ts';

const SHEET1 = "LoginTestCases"
const SHEET = "BankUserTestCases"
const data = Excelutils.getTestData(SHEET1,"TC_GP_Login_001");
let login: loginPage;
test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
    await login.openApplication(data.alerttext);
});

let bankumenu : bankUser;
test.beforeEach(async ({ page }) => {
    bankumenu = new bankUser(page);
});

const data1 = Excelutils.getTestData(SHEET,"TC_GP_BU01");
test(`${data1.TestCaseID} - ${data1.Description}`,{tag:"@TC_GP_BU01"}, async ({}) => {
    await login.login(data1.UserName, data1.Password, data1.Captcha);
    await login.login_otp(data1.OTP);
    await bankumenu.bankusermenu();
});

const data2 = Excelutils.getTestData(SHEET,"TC_GP_BU02");
test(`${data2.TestCaseID} - ${data2.Description}`,{tag:"@TC_GP_BU02"}, async ({}) => {
    await login.login(data2.UserName, data2.Password, data2.Captcha);
    await login.login_otp(data2.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.roleandpermissiontable();
});