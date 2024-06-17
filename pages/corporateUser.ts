import {Locator, Page, expect} from "@playwright/test"

export class corporateUser{
    readonly page : Page;
    readonly corpuser :  Locator;
    readonly roleandpermission : Locator;
    readonly corpapprovepolicy : Locator;
///////////////////////////////////////////
    readonly reqreceive  : Locator;
    readonly reqraised : Locator;
    readonly payoverdue : Locator;
    readonly relcardfunc : Locator;
    readonly bankreports : Locator;
    readonly corpreports : Locator;
    readonly notification : Locator;
    readonly uamparam : Locator;

    constructor(page : Page){
        this.page        = page;
        this.corpuser          = page.locator("//span[normalize-space()='Corporate User']")
        this.roleandpermission = page.locator("//div[@class='mainMenu active']//span[contains(text(),'Roles & Permissions')]")
        this.corpapprovepolicy = page.locator("//div[@class='subMenu']//span[contains(text(),'Corporate Approval Policy')]")
        
////////////////////////////////////////////////////////////  
        this.reqreceive             = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Requests Received')]")
        this.reqraised              = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Requests Raised')]")
        this.payoverdue             = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Payment Overdue')]")
        this.relcardfunc            = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Relationship Card Functionality')]")
        this.bankreports            = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Bank Reports')]")
        this.corpreports            = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Corporate Reports')]")
        this.notification           = page.locator("//div[@class='mainMenuData']//span[contains(text(),'Notifications')]")
        this.uamparam               = page.locator("//div[@class='mainMenuData']//span[contains(text(),'UAM Parameters')]")
    }
}