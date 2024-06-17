import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";

// const sheetName = "Validtestlogin";
// const testData = Excelutils.runTestCasesWithMultipleData(sheetName);
// let login: loginPage;

// test.describe('Data-driven tests',() => {
//     testData.forEach(({TestCaseID,DataSetIndex,...data }) =>{
//         test(`Test Case ${TestCaseID} - DataSet ${DataSetIndex}`,{tag : "@TC_GP_Multiplelogin"}, async ({ page }) => {

//             console.log(`Running Test Case ${TestCaseID} with DataSet ${DataSetIndex}`);
//             console.log('Test Data:',data);

//             login = new loginPage(page);
//             await page.goto('/');
//             await expect(page).toHaveTitle(/.*HDFC Corporate Credit Card Portal/);
//             console.log(data.Username)
//            // await login.login(data.Username, data.Password, data.Captcha)
//             //await login.login_otp(data.OTP);
//         })
//     }
// )
// }
// )
