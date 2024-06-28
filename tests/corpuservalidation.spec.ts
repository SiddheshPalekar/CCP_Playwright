import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";
import { corporateUser } from '../pages/corporateUser.ts';

const SHEET1 = "LoginTestCases"
const SHEET = "CorpUserTestCases"
const data = Excelutils.getTestData(SHEET1,"TC_GP_Login_001");
let login: loginPage;
test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
    await login.openApplication(data.alerttext);
});

let corpumenu : corporateUser;
test.beforeEach(async ({ page }) => {
    corpumenu = new corporateUser(page);
});

const data1 = Excelutils.getTestData(SHEET,"TC_GP_CU01");
test(`${data1.TestCaseID} - ${data1.Description}`,{tag:"@TC_GP_CU01"}, async ({}) => {
    await login.login(data1.UserName, data1.Password, data1.Captcha);
    await login.login_otp(data1.OTP);
    await corpumenu.corporateusermenu();
});

const data2 = Excelutils.getTestData(SHEET,"TC_GP_CU02");
test(`${data2.TestCaseID} - ${data2.Description}`,{tag:"@TC_GP_CU02"}, async ({}) => {
    await login.login(data2.UserName, data2.Password, data2.Captcha);
    await login.login_otp(data2.OTP);
    await corpumenu.corporateusermenu();
    await corpumenu.corproleandpermissiontabclick();
    await corpumenu.enterrelationshipno(data2.RelationshipNumber)
    await corpumenu.roleandpermissiontable();
});