import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";

const SHEET = "ForgetPasswordTestCases"

let login: loginPage;
test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
    await login.openApplication(data.alerttext);
});

let forgetpw : forgetPassword;
test.beforeEach(async ({ page }) => {
    forgetpw = new forgetPassword(page);
});

const data = Excelutils.getTestData(SHEET,"TC_GP_Login_001");

const data1 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_01");
test(`${data1.TestCaseID} - ${data1.Description}`,{tag:"@TC_GP_ForgotPwd_01"}, async ({}) => {
    await forgetpw.forgetPasswordclick
});