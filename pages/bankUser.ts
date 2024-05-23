import {Locator, Page, expect} from "@playwright/test"
import { lcov } from "node:test/reporters";
import { constrainedMemory } from "process";

export class bankUser{

    readonly page : Page;
    readonly bankuser : Locator;
    readonly roleandpermission : Locator;
    readonly createrole : Locator;
    readonly roletable : Locator;
    readonly roletableedit : Locator;
    readonly roletabledisable : Locator;
    readonly users : Locator;
    readonly bankapprovepolicy : Locator;
    readonly reqreceive  : Locator;
    readonly reqraised : Locator;
    readonly payoverdue : Locator;
    readonly relcardfunc : Locator;
    readonly bankreports : Locator;
    readonly corpreports : Locator;
    readonly notification : Locator;
    readonly uamparam : Locator;

    constructor(page : Page){
        this.page              = page;
        this.bankuser          = page.locator("//span[normalize-space()='Bank Users']")
        this.roleandpermission = page.locator("//div[@class='mainMenu active']//span[contains(text(),'Roles & Permissions')]")
        this.createrole        = page.locator("//div[@class='btn-content'][normalize-space()='+ Create Role']")
        this.roletable         = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr")
        this.roletableedit     = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[1]//td[@datath='Action']//div[1]//div[1]")
        this.roletabledisable  = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[1]//td[@datath='Action']//div[1]//div[2]")
        this.users             = page.locator("//div[@class='mainMenu active']//div[@class='subMenu']//span[contains(text(),'Users')]")
        this.bankapprovepolicy = page.locator("//div[@class='subMenu']//span[contains(text(),'Bank Approval Policy')]")    
        this.reqreceive        = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Requests Received')]")
        this.reqraised         = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Requests Raised')]")
        this.payoverdue        = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Payment Overdue')]")
        this.relcardfunc       = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Relationship Card Functionality')]")
        this.bankreports       = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Bank Reports')]")
        this.corpreports       = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Corporate Reports')]")
        this.notification      = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Notifications')]")
        this.uamparam          = page.locator("//div[@class='mainMenuData']//span[contains(text(),'UAM Parameters')]")
    }

    async bankusermenu() : Promise<void>{
        await this.bankuser.click();
        expect(this.roleandpermission).toBeVisible();
        expect(this.users).toBeVisible();
        expect(this.bankapprovepolicy).toBeVisible();
    }

    async roleandpermissiontable() : Promise<void>{
        await this.roleandpermission.click();
        await this.page.waitForTimeout(3000);
        await expect(this.roletable).toBeVisible();
        const rowcount = await this.roletable.count();
        console.log(rowcount)

    }

}