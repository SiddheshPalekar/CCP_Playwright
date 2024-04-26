import {Locator, Page, expect} from "@playwright/test"

export class forgetPassword{

    readonly page : Page;
    readonly forgetPasswordbutton : Locator;
    readonly forgetPasswordtitle : Locator;
    readonly username : Locator;
    readonly phoneNumber: Locator;
    readonly captcha : Locator;


    constructor(page : Page){
        this.page                 = page;
        this.forgetPasswordbutton = page.locator("//a[normalize-space()='Forgot Password ?']");
        this.forgetPasswordtitle  = page.locator("//h2[normalize-space()='Forgot Password']");
        this.username             = page.locator("//input[@id='username']");
        this.phoneNumber          = page.locator("//input[@id='mobileNumber']");
        this.captcha              = page.locator("//input[@id='captcha']");

    }

    async forgetPasswordclick():Promise<void>{
        await this.forgetPasswordbutton.click();
        await this.forgetPasswordtitle.isVisible();

    }

    async forgetPassworddetails(usernameVal : string , phonenumVal : string , captchaVal : string):Promise<void>{
        await this.username.click();
        await this.username.fill(usernameVal);
        await this.phoneNumber.fill (phonenumVal);
        await this.captcha.fill(captchaVal);

    }
}