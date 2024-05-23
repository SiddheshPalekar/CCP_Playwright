import {Locator, Page, expect} from "@playwright/test"

export class corporateUser{
    readonly page : Page;
    readonly corpuser :  Locator;
    readonly roleandpermission : Locator;
    readonly corpapprovepolicy : Locator;

    constructor(page : Page){
        this.page        = page;
        this.corpuser          = page.locator("//span[normalize-space()='Corporate User']")
        this.roleandpermission = page.locator("//div[@class='mainMenu active']//span[contains(text(),'Roles & Permissions')]")
        this.corpapprovepolicy = page.locator("//div[@class='subMenu']//span[contains(text(),'Corporate Approval Policy')]")
    }
}