import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import Excelutils  from "../utils/Excelutils.ts";


const SHEET = "LoginTestCases";

let login: loginPage;
test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
});

const data1 = Excelutils.getTestData(SHEET,"TC_GP_Login_002");
test(`${data1.TestCaseID} - ${data1.Description}`,{tag:"@TC_GP_Login_002"}, async ({}) => {
    await login.openApplication();
    await login.login(data1.UserName, data1.Password, data1.Captcha);
    await login.login_otp(data1.OTP);
});

const data2 = Excelutils.getTestData(SHEET,"TC_GP_Login_003");
test(`${data2.TestCaseID} - ${data2.Description}`,{tag:"@TC_GP_Login_003"},async({}) => {
    await login.openApplication();
    await login.login(data2.UserName, data2.Password, data2.Captcha);
    await login.invalidlogin_error_message(data2.Error);

});

const data3 = Excelutils.getTestData(SHEET,"TC_GP_Login_004");
test(`${data3.TestCaseID} - ${data3.Description}`,{tag:"@TC_GP_Login_004"},async({}) => {
    await login.openApplication();
    await login.login(data3.UserName, data3.Password, data3.Captcha);
    await login.invalidlogin_error_message(data3.Error);

});

const data4 = Excelutils.getTestData(SHEET,"TC_GP_Login_005");
test(`${data4.TestCaseID} - ${data4.Description}`,{tag:"@TC_GP_Login_005"},async({}) => {
    await login.openApplication();
    await login.login(data4.UserName, data4.Password, data4.Captcha);
    await login.invalidlogin_error_message(data4.Error);

});

const data5 = Excelutils.getTestData(SHEET,"TC_GP_Login_006");
test(`${data5.TestCaseID} - ${data5.Description}`,{tag:"@TC_GP_Login_006"},async({}) => {
    await login.openApplication();
    await login.login(data5.UserName, data5.Password, data5.Captcha);
    await login.invalidlogin_error_message(data5.Error);

});

const data6 = Excelutils.getTestData(SHEET,"TC_GP_Login_007");
test(`${data6.TestCaseID} - ${data6.Description}`,{tag:"@TC_GP_Login_007"},async({}) => {
    await login.openApplication();
    await login.login(data6.UserName, data6.Password, data6.Captcha);
    await login.invalidlogin_error_message(data6.Error);

});

const data7 = Excelutils.getTestData(SHEET,"TC_GP_Login_008");
test(`${data7.TestCaseID} - ${data7.Description}`,{tag:"@TC_GP_Login_008"},async({}) => {
    await login.openApplication();
    await login.login(data7.UserName, data7.Password, data7.Captcha);
    await login.invalidlogin_error_message(data7.Error);

});

const data8 = Excelutils.getTestData(SHEET,"TC_GP_Login_009");
test(`${data8.TestCaseID} - ${data8.Description}`,{tag:"@TC_GP_Login_009"},async({}) => {
    await login.openApplication();
    await login.login(data8.UserName, data8.Password, data8.Captcha);
    await login.invalidlogin_error_message(data8.Error);

});

const data9 = Excelutils.getTestData(SHEET,"TC_GP_Login_010");
test(`${data9.TestCaseID} - ${data9.Description}`,{tag:"@TC_GP_Login_010"},async({}) => {
    await login.openApplication();
    await login.clear_username(data9.UserName);
    await login.field_error_message(data9.Error)
});

const data10 = Excelutils.getTestData(SHEET,"TC_GP_Login_011");
test(`${data10.TestCaseID} - ${data10.Description}`,{tag:"@TC_GP_Login_011"},async({}) => {
    await login.openApplication();
    await login.clear_password(data10.Password);
    await login.field_error_message(data10.Error);
    await login.enter_invalid_password(data10.Password);
    await login.field_error_message(data10.Error2);
});

const data11 = Excelutils.getTestData(SHEET,"TC_GP_Login_012");
test(`${data11.TestCaseID} - ${data11.Description}`,{tag:"@TC_GP_Login_012"},async({}) => {
    await login.openApplication();
    await login.clear_captcha(data11.Captcha);
    await login.field_error_message(data11.Error);
    await login.enter_invalid_captcha(data11.Captcha);
    await login.field_error_message(data11.Error2);
});

const data12 = Excelutils.getTestData(SHEET,"TC_GP_Login_013");
test(`${data12.TestCaseID} - ${data12.Description}`,{tag:"@TC_GP_Login_013"},async({}) => {
    await login.openApplication();
    await login.length_of_usernamefield(data12.Maxfieldlength)
});

const data13 = Excelutils.getTestData(SHEET,"TC_GP_Login_014");
test(`${data13.TestCaseID} - ${data13.Description}`,{tag:"@TC_GP_Login_014"},async({}) => {
    await login.openApplication();
    await login.length_of_passwordfield(data13.Maxfieldlength, data13.Minfieldlength)
});

const data14 = Excelutils.getTestData(SHEET,"TC_GP_Login_015");
test(`${data14.TestCaseID} - ${data14.Description}`,{tag:"@TC_GP_Login_015"},async({}) => {
    await login.openApplication();
    await login.length_of_capchafield(data14.Maxfieldlength, data14.Minfieldlength)

});

const data15 = Excelutils.getTestData(SHEET,"TC_GP_Login_016");
test(`${data15.TestCaseID} - ${data15.Description}`,{tag:"@TC_GP_Login_016"},async({}) => {
    await login.openApplication();
    await login.login_button_functionality();

});

const data16 = Excelutils.getTestData(SHEET,"TC_GP_Login_017");
test(`${data16.TestCaseID} - ${data16.Description}`,{tag:"@TC_GP_Login_017"},async({}) => {
    await login.openApplication();
    await login.validate_refresh_captcha();

});

const data17 = Excelutils.getTestData(SHEET,"TC_GP_Login_018");
test(`${data17.TestCaseID} - ${data17.Description}`,{tag:"@TC_GP_Login_018"},async({}) => {
    await login.openApplication();
    await login.password_eye_button();

});




test('validate back to login page button',{tag:"@back_button"}, async({ page }) => {
    await login.openApplication();
    await login.login(data1.UserName, data1.Password, data1.Captcha);
    await login.login_otp(data1.OTP);
    await login.backtologin();
    
});

