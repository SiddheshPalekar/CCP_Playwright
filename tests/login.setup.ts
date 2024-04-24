import { test as setup, test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { Credentials } from "../testData/loginData.json";
import { STORAGE_STATE } from '../playwright.config';
import Excelutils  from "../utils/Excelutils.ts";


let home: loginPage;
test.beforeEach(async ({ page }) => {
    home = new loginPage(page);
});

setup('Open Application',{tag:"@TC_GP_Login_001"},async({} )=> {
    await home.openApplication();
});




