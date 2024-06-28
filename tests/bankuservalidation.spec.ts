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
    await bankumenu.roleandpermissiontabclick();
    await bankumenu.roleandpermissiontableaction();

});

const data3 = Excelutils.getTestData(SHEET,"TC_GP_BU03");
test(`${data3.TestCaseID} - ${data3.Description}`,{tag:"@TC_GP_BU03"}, async ({}) => {
    await login.login(data3.UserName, data3.Password, data3.Captcha);
    await login.login_otp(data3.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.roleandpermissiontabclick();
    await bankumenu.editselectedrole();
    await bankumenu.quickAccesslinksallrole();
});

const data4 = Excelutils.getTestData(SHEET,"TC_GP_BU04");
test(`${data4.TestCaseID} - ${data4.Description}`,{tag:"@TC_GP_BU04"}, async ({}) => {
    await login.login(data4.UserName, data4.Password, data4.Captcha);
    await login.login_otp(data4.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.roleandpermissiontabclick();
    await bankumenu.createrolemethod(data4.Role);
    await bankumenu.quickAccesslinksallrole();   
});

const data5 = Excelutils.getTestData(SHEET,"TC_GP_BU05");
test(`${data5.TestCaseID} - ${data5.Description}`,{tag:"@TC_GP_BU05"}, async ({}) => {
    await login.login(data5.UserName, data5.Password, data5.Captcha);
    await login.login_otp(data5.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.roleandpermissiontabclick();
    await bankumenu.createrolemethod(data5.Role);
    await bankumenu.quickaccessselectpermission(data5.Tab, data5.Permission);
    
});

const data6 = Excelutils.getTestData(SHEET,"TC_GP_BU06");
test(`${data6.TestCaseID} - ${data6.Description}`,{tag:"@TC_GP_BU06"}, async ({}) => {
    await login.login(data6.UserName, data6.Password, data6.Captcha);
    await login.login_otp(data6.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.roleandpermissiontabclick();
    await bankumenu.createrolemethod(data6.Role);
    await bankumenu.multipleroleselection(data6.Tab, data6.Permission,data6.Tab2,data6.Permission2);
    
});

const data7 = Excelutils.getTestData(SHEET,"TC_GP_BU07");
test(`${data7.TestCaseID} - ${data7.Description}`,{tag:"@TC_GP_BU07"}, async ({}) => {
    await login.login(data7.UserName, data7.Password, data7.Captcha);
    await login.login_otp(data7.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.userfieldclick();
    await bankumenu.resetuserid(data7.UserId);
    await bankumenu.useridsearch(data7.UserId);
    
});

const data8 = Excelutils.getTestData(SHEET,"TC_GP_BU08");
test(`${data8.TestCaseID} - ${data8.Description}`,{tag:"@TC_GP_BU08"}, async ({}) => {
    await login.login(data8.UserName, data8.Password, data8.Captcha);
    await login.login_otp(data8.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.userfieldclick();
    await bankumenu.filterbystatusbankusers(data8.Status);
    await bankumenu.bankusertablestatus();
    await bankumenu.clearstatusfilter();
});

const data9 = Excelutils.getTestData(SHEET,"TC_GP_BU09");
test(`${data9.TestCaseID} - ${data9.Description}`,{tag:"@TC_GP_BU09"}, async ({}) => {
    await login.login(data9.UserName, data9.Password, data9.Captcha);
    await login.login_otp(data9.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.userfieldclick();
    await bankumenu.filterbyrolebankusers(data9.Urole);
    await bankumenu.bankusertablerole();
});

const data10 = Excelutils.getTestData(SHEET,"TC_GP_BU10");
test(`${data10.TestCaseID} - ${data10.Description}`,{tag:"@TC_GP_BU10"}, async ({}) => {
    await login.login(data10.UserName, data10.Password, data10.Captcha);
    await login.login_otp(data10.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.userfieldclick();
    await bankumenu.cancelcreatesingleuser();
    await bankumenu.createsingleuser(data10.Firstname, data10.Lastname, data10.Mobile, data10.Email, data10.Emplcode, data10.Role, data10.Branchcode, data10.Branchname, data10.Supercode, data10.Deptname, data10.Deptcode);
});


const data11 = Excelutils.getTestData(SHEET,"TC_GP_BU11");
test(`${data11.TestCaseID} - ${data11.Description}`,{tag:"@TC_GP_BU11"}, async ({}) => {
    await login.login(data11.UserName, data11.Password, data11.Captcha);
    await login.login_otp(data11.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.bankapprovalpolicyclick();
    await bankumenu.createpolicy(data11.Functionality, data11.Subfunctionality);
    await bankumenu.singlecreationapprovalpolicy(data11.AppPolicystatus)
});

const data12 = Excelutils.getTestData(SHEET,"TC_GP_BU12");
test(`${data12.TestCaseID} - ${data12.Description}`,{tag:"@TC_GP_BU12"}, async ({}) => {
    await login.login(data12.UserName, data12.Password, data12.Captcha);
    await login.login_otp(data12.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.bankapprovalpolicyclick();
    await bankumenu.createpolicy(data12.Functionality, data12.Subfunctionality);
    await bankumenu.singlecreationapprovalpolicy(data12.AppPolicystatus)
});

const data13 = Excelutils.getTestData(SHEET,"TC_GP_BU13");
test(`${data13.TestCaseID} - ${data13.Description}`,{tag:"@TC_GP_BU13"}, async ({}) => {
    await login.login(data13.UserName, data13.Password, data13.Captcha);
    await login.login_otp(data13.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.bankapprovalpolicyclick();
    await bankumenu.createpolicy(data13.Functionality, data13.Subfunctionality);
    await bankumenu.noworkflow(data13.AppPolicystatus)
});

const data14 = Excelutils.getTestData(SHEET,"TC_GP_BU14");
test(`${data14.TestCaseID} - ${data14.Description}`,{tag:"@TC_GP_BU14"}, async ({}) => {
    await login.login(data14.UserName, data14.Password, data14.Captcha);
    await login.login_otp(data14.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.bankapprovalpolicyclick();
    await bankumenu.createpolicy(data14.Functionality, data14.Subfunctionality);
    await bankumenu.validateaddapprovers(data14.ApproverRole);
});

const data15 = Excelutils.getTestData(SHEET,"TC_GP_BU15");
test(`${data15.TestCaseID} - ${data15.Description}`,{tag:"@TC_GP_BU15"}, async ({}) => {
    await login.login(data15.UserName, data15.Password, data15.Captcha);
    await login.login_otp(data15.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.bankapprovalpolicyclick();
    await bankumenu.createpolicy(data15.Functionality, data15.Subfunctionality);
    await bankumenu.erroraddapprovalrole(data15.Error)
});

const data16 = Excelutils.getTestData(SHEET,"TC_GP_BU16");
test(`${data16.TestCaseID} - ${data16.Description}`,{tag:"@TC_GP_BU16"}, async ({}) => {
    await login.login(data16.UserName, data16.Password, data16.Captcha);
    await login.login_otp(data16.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.bankapprovalpolicyclick();
    await bankumenu.editapprovalpolicy(data16.Functionality);
});

const data17 = Excelutils.getTestData(SHEET,"TC_GP_BU17");
test(`${data17.TestCaseID} - ${data17.Description}`,{tag:"@TC_GP_BU17"}, async ({}) => {
    await login.login(data17.UserName, data17.Password, data17.Captcha);
    await login.login_otp(data17.OTP);
    await bankumenu.bankusermenu();
    await bankumenu.bankapprovalpolicyclick();
    await bankumenu.editapprovalpolicy(data17.Functionality);
});