import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { forgetPassword } from '../pages/forgetPassword';
import Excelutils  from "../utils/Excelutils.ts";
import { profilePage } from '../pages/profilePage.ts';

const SHEET1 = "LoginTestCases"
const SHEET = "ProfileTestCases"
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

let profile : profilePage;
test.beforeEach(async ({ page }) => {
    profile = new profilePage(page);
});

const data1 = Excelutils.getTestData(SHEET,"TC_GP_Profile_01");
test(`${data1.TestCaseID} - ${data1.Description}`,{tag:"@TC_GP_Profile_01"}, async ({}) => {
    await login.login(data1.UserName, data1.Password, data1.Captcha);
    await login.login_otp(data1.OTP);
    await profile.iconprofile();
    await profile.viewprofile();
});

const data2 = Excelutils.getTestData(SHEET,"TC_GP_Profile_02");
test(`${data2.TestCaseID} - ${data2.Description}`,{tag:"@TC_GP_Profile_02"}, async ({}) => {
    await login.login(data2.UserName, data2.Password, data2.Captcha);
    await login.login_otp(data2.OTP);
    await profile.iconprofile();
    await profile.viewprofile();
    await profile.resetpasswordfunctionality();
    await forgetpw.resetpassword(data2.CurrentPassword ,data2.NewPassword, data2.ConfirmNewPassword)
});

const data3 = Excelutils.getTestData(SHEET,"TC_GP_Profile_03");
test(`${data3.TestCaseID} - ${data3.Description}`,{tag:"@TC_GP_Profile_03"}, async ({}) => {
    await login.login(data3.UserName, data3.Password, data3.Captcha);
    await login.login_otp(data3.OTP);
    await profile.iconprofile();
    await profile.viewprofile();
    await profile.alluserSelectmenu();
});

const data4 = Excelutils.getTestData(SHEET,"TC_GP_Profile_04");
test(`${data4.TestCaseID} - ${data4.Description}`,{tag:"@TC_GP_Profile_04"}, async ({}) => {
    await login.login(data4.UserName, data4.Password, data4.Captcha);
    await login.login_otp(data4.OTP);
    await profile.iconprofile();
    await profile.viewprofile();
    await profile.useridselect(data4.UserId);

    
});

const data6 = Excelutils.getTestData(SHEET,"TC_GP_Profile_06");
test(`${data6.TestCaseID} - ${data6.Description}`,{tag:"@TC_GP_Profile_06"}, async ({}) => {
    await login.login(data6.UserName, data6.Password, data6.Captcha);
    await login.login_otp(data6.OTP);
    await profile.iconprofile();
    await profile.viewprofile();
    await profile.chagefilterrole(data6.Role);
    await profile.countelement();
   
});

const data7 = Excelutils.getTestData(SHEET,"TC_GP_Profile_07");
test(`${data7.TestCaseID} - ${data7.Description}`,{tag:"@TC_GP_Profile_07"}, async ({}) => {
    await login.login(data7.UserName, data7.Password, data7.Captcha);
    await login.login_otp(data7.OTP);
    await profile.iconprofile();
    await profile.logout();
   
});