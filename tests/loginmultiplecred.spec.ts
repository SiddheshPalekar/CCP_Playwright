import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";


const testData = Excelutils.getTestDataArray("LoginMulti");
// eslint-disable-next-line no-restricted-syntax
for (const data1 of testData) {
    test(`${data1.TestCaseID} : ${data1.Description}`, {tag:"@TC_GP_MT01"},async ({ page }) => {
        // Allure.attachDetails(data.Description, data.Issue);
        const login = new loginPage(page);
        await login.openApplication(data1.alerttext);
        await login.login(data1.UserName, data1.Password, data1.Captcha)
        await login.login_otp(data1.OTP);
    });
}
