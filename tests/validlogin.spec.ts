import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";
import { profilePage } from '../pages/profilePage.ts';




// const testData = Excelutils.getTestDataArray("Validtestlogin");
// console.log(testData)
// for (const data of testData) {
//     test(`${data.TestCaseID} : ${data.Description}`,{tag:"@TC_GP_Login"}, async ({ page }) => {
//         let login: loginPage;
//         login = new loginPage(page);
//         await login.openApplication(data.Alert);
//         await login.login(data.Username, data.Password, data.Captcha);
//         await login.login_otp(data.OTP);
//     });
// }