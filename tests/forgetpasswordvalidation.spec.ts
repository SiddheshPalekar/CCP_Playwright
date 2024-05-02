import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";

const SHEET1 = "LoginTestCases"
const SHEET = "ForgetPasswordTestCases"
const data = Excelutils.getTestData(SHEET1,"TC_GP_Login_001");
let login: loginPage;
test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
    await login.openApplication(data.alerttext);
});

let forgetpw : forgetPassword;
test.beforeEach(async ({ page }) => {
    forgetpw = new forgetPassword(page);
});


const data1 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_01");
test(`${data1.TestCaseID} - ${data1.Description}`,{tag:"@TC_GP_ForgotPwd_01"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
});

const data2 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_02");
test(`${data2.TestCaseID} - ${data2.Description}`,{tag:"@TC_GP_ForgotPwd_02"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data2.UserName ,data2.MobileNumber, data2.Captcha ); 
    await forgetpw.temporaryPasswordtemplate(data2.PopupMsg);
});

const data3 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_03");
test(`${data3.TestCaseID} - ${data3.Description}`,{tag:"@TC_GP_ForgotPwd_03"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data3.UserName ,data3.MobileNumber, data3.Captcha ); 
    await forgetpw.invalidDetailsError(data3.Error);
});

const data4 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_04");
test(`${data4.TestCaseID} - ${data4.Description}`,{tag:"@TC_GP_ForgotPwd_04"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data4.UserName ,data4.MobileNumber, data4.Captcha ); 
    await forgetpw.invalidDetailsError(data4.Error);
});

const data5 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_05");
test(`${data5.TestCaseID} - ${data5.Description}`,{tag:"@TC_GP_ForgotPwd_05"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data5.UserName ,data5.MobileNumber, data5.Captcha ); 
    await forgetpw.invalidDetailsError(data5.Error);
});

const data6 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_06");
test(`${data6.TestCaseID} - ${data6.Description}`,{tag:"@TC_GP_ForgotPwd_06"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data6.UserName ,data6.MobileNumber, data6.Captcha ); 
    await forgetpw.invalidDetailsError(data6.Error);
});

const data7 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_07");
test(`${data7.TestCaseID} - ${data7.Description}`,{tag:"@TC_GP_ForgotPwd_07"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data7.UserName ,data7.MobileNumber, data7.Captcha ); 
    await forgetpw.invalidDetailsError(data7.Error);
});

const data8 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_08");
test(`${data8.TestCaseID} - ${data8.Description}`,{tag:"@TC_GP_ForgotPwd_08"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data8.UserName ,data8.MobileNumber, data8.Captcha ); 
    await forgetpw.invalidDetailsError(data8.Error);
});

const data9 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_09");
test(`${data9.TestCaseID} - ${data9.Description}`,{tag:"@TC_GP_ForgotPwd_09"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.forgetPassworddetails(data9.UserName ,data9.MobileNumber, data9.Captcha ); 
    await forgetpw.invalidDetailsError(data9.Error);
});

const data10 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_10");
test(`${data10.TestCaseID} - ${data10.Description}`,{tag:"@TC_GP_ForgotPwd_10"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.clearfieldUsernameandMobileNumber(data10.UserName, data10.MobileNumber);
})

const data11 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_11");
test(`${data11.TestCaseID} - ${data11.Description}`,{tag:"@TC_GP_ForgotPwd_11"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.validate_refresh_captcha();
})


const data12 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_12");
test(`${data12.TestCaseID} - ${data12.Description}`,{tag:"@TC_GP_ForgotPwd_12"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.username_error_field(data12.UserName, data12.Error);
})


const data13 = Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_13");
test(`${data13.TestCaseID} - ${data13.Description}`,{tag:"@TC_GP_ForgotPwd_13"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.mobilenumber_error_field(data13.MobileNumber, data13.Error, data13.Error2);
    
})

const data14 =  Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_14");
test(`${data14.TestCaseID} - ${data14.Description}`,{tag:"@TC_GP_ForgotPwd_14"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.captcha_error_field(data14.Captcha, data14.Error, data14.Error2)
})

const data15 =  Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_15");
test(`${data15.TestCaseID} - ${data15.Description}`,{tag:"@TC_GP_ForgotPwd_15"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.submit_button_functionality();
})

const data16 =  Excelutils.getTestData(SHEET,"TC_GP_ForgotPwd_16");
test(`${data16.TestCaseID} - ${data16.Description}`,{tag:"@TC_GP_ForgotPwd_16"}, async ({}) => {
    await forgetpw.forgetPasswordclick();
    await forgetpw.backtologinfromforgetPassword();
})



