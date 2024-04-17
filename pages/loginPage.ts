import {Locator, Page, expect} from "@playwright/test"

export class loginPage{

    readonly page : Page;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly captcha : Locator;
    readonly loginButton : Locator;
    readonly otp: Locator;
    readonly submitOtp: Locator;
    readonly header: Locator;
    readonly backtologinbtn: Locator;

    constructor(page : Page){
        this.page            = page;
        this.header          = page.getByText("Login");
        this.usernameTextBox = page.locator("id=username");
        this.passwordTextBox = page.locator("id=password");
        this.captcha         = page.locator("id=captcha");
        this.loginButton     = page.locator("id=login");
        this.otp             = page.locator("id=otp");
        this.submitOtp       = page.locator("id=authenticateOTP");
        this.backtologinbtn  = page.getByText("Back to Login");

    }

    async openApplication(){
        await this.page.goto("https://awsuatcccp.go.ooo/");
        await expect(this.page).toHaveTitle(/.*HDFC Corporate Credit Card Portal/);

    }

    async login(usernameVal : string , passwordVal : string , captchaVal : string , otpVal : string ): Promise<void>{
        await this.header.isVisible();
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(usernameVal);
        await this.passwordTextBox.fill(passwordVal);
        await this.captcha.fill(captchaVal);
        await this.loginButton.click();
        await this.otp.fill(otpVal);
        await this.submitOtp.click();
        // await this.page.pause();
    }

    async backtologin(usernameVal : string , passwordVal : string , captchaVal : string ): Promise<void>{
        await this.header.isVisible();
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(usernameVal);
        await this.passwordTextBox.fill(passwordVal);
        await this.captcha.fill(captchaVal);
        await this.loginButton.click();
        await this.backtologinbtn.click();
        // await this.header.isVisible();
        await this.usernameTextBox.isVisible();
    }


}