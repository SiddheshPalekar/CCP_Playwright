import {Locator, Page, expect} from "@playwright/test";

export class homePage{
    readonly page : Page;
    readonly logo : Locator;
    readonly profileicon : Locator;
    readonly notification : Locator;
    readonly sidemenu : Locator;
    readonly bankuser : Locator;

    constructor(page : Page){
        this.page           = page;
        this.logo           = page.locator("id=hdfcLogo");
        this.profileicon    = page.locator("id=iconUserProfile");
        this.notification   = page.locator("id=IconBell");
        this.sidemenu       = page.locator("//nav[@class='sideBar']");
        this.bankuser       = page.locator("//*[@id='IconUserPen'][2]");
    }
    
    async HomepageValidation():Promise<void>{
        await this.logo.isVisible();
        await this.profileicon.isVisible();
        await this.sidemenu.isVisible();
        await this.bankuser.click();
        
    }
}

