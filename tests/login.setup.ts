import { test as setup, test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import { STORAGE_STATE } from '../playwright.config';
import Excelutils  from "../utils/Excelutils.ts";

const SHEET = "LoginTestCases";

let login: loginPage;
test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
});

const data = Excelutils.getTestData(SHEET,"TC_GP_Login_001");
setup('Open Application',{tag:"@TC_GP_Login_001"},async({} )=> {
    await login.openApplication(data.alerttext);
});




