import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import Excelutils  from "../utils/Excelutils.ts";


const SHEET = "LoginTestCases";

let home: loginPage;
test.beforeEach(async ({ page }) => {
    home = new loginPage(page);
});

const data1 = Excelutils.getTestData(SHEET,"TC_GP_Login_002");
test(`${data1.TestCaseID} - ${data1.Description}`,{tag:"@TC_GP_Login_002"}, async ({}) => {
    await home.openApplication();
    await home.login(data1.UserName, data1.Password, data1.Captcha);
    await home.login_otp(data1.OTP);
});

const data2 = Excelutils.getTestData(SHEET,"TC_GP_Login_003");
test(`${data2.TestCaseID} - ${data2.Description}`,{tag:"@TC_GP_Login_003"},async({}) => {
    await home.openApplication();
    await home.login(data2.UserName, data2.Password, data2.Captcha);
    await home.invalidlogin_error_message(data2.Error);

});

const data3 = Excelutils.getTestData(SHEET,"TC_GP_Login_004");
test(`${data3.TestCaseID} - ${data3.Description}`,{tag:"@TC_GP_Login_004"},async({}) => {
    await home.openApplication();
    await home.login(data3.UserName, data3.Password, data3.Captcha);
    await home.invalidlogin_error_message(data3.Error);

});

const data4 = Excelutils.getTestData(SHEET,"TC_GP_Login_005");
test(`${data4.TestCaseID} - ${data4.Description}`,{tag:"@TC_GP_Login_005"},async({}) => {
    await home.openApplication();
    await home.login(data4.UserName, data4.Password, data4.Captcha);
    await home.invalidlogin_error_message(data4.Error);

});

const data5 = Excelutils.getTestData(SHEET,"TC_GP_Login_006");
test(`${data5.TestCaseID} - ${data5.Description}`,{tag:"@TC_GP_Login_006"},async({}) => {
    await home.openApplication();
    await home.login(data5.UserName, data5.Password, data5.Captcha);
    await home.invalidlogin_error_message(data5.Error);

});

const data6 = Excelutils.getTestData(SHEET,"TC_GP_Login_007");
test(`${data6.TestCaseID} - ${data6.Description}`,{tag:"@TC_GP_Login_007"},async({}) => {
    await home.openApplication();
    await home.login(data6.UserName, data6.Password, data6.Captcha);
    await home.invalidlogin_error_message(data6.Error);

});

const data7 = Excelutils.getTestData(SHEET,"TC_GP_Login_008");
test(`${data7.TestCaseID} - ${data7.Description}`,{tag:"@TC_GP_Login_008"},async({}) => {
    await home.openApplication();
    await home.login(data7.UserName, data7.Password, data7.Captcha);
    await home.invalidlogin_error_message(data7.Error);

});

const data8 = Excelutils.getTestData(SHEET,"TC_GP_Login_009");
test(`${data8.TestCaseID} - ${data8.Description}`,{tag:"@TC_GP_Login_009"},async({}) => {
    await home.openApplication();
    await home.login(data8.UserName, data8.Password, data8.Captcha);
    await home.invalidlogin_error_message(data8.Error);

});

const data9 = Excelutils.getTestData(SHEET,"TC_GP_Login_010");
test(`${data9.TestCaseID} - ${data9.Description}`,{tag:"@TC_GP_Login_010"},async({}) => {
    await home.openApplication();
    await home.clear_username(data9.UserName);
    await home.field_error_message(data9.Error)
});

const data10 = Excelutils.getTestData(SHEET,"TC_GP_Login_011");
test(`${data10.TestCaseID} - ${data10.Description}`,{tag:"@TC_GP_Login_011"},async({}) => {
    await home.openApplication();
    await home.clear_password(data10.Password);
    await home.field_error_message(data10.Error);
    await home.enter_invalid_password(data10.Password);
    await home.field_error_message(data10.Error2);
});


test('validate back to login page button',{tag:"@back_button"}, async({ page }) => {
    await home.openApplication();
    await home.login(data1.UserName, data1.Password, data1.Captcha);
    await home.login_otp(data1.OTP);
    await home.backtologin();
    
});

