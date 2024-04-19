import {Locator, Page, expect} from "@playwright/test"
import { errors } from "../testData/loginData.json";

export class loginPage{


    readonly page : Page;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly captcha : Locator;
    readonly loginButton : Locator;
    readonly otp  : Locator;
    readonly submitOtp  : Locator;
    readonly header : Locator;
    readonly backtologinbtn : Locator;
    readonly captchref  :   Locator;
    readonly error_msg :  Locator;

    constructor(page : Page){
        this.page            = page;
        this.header          = page.getByText("Login");
        this.captchref       = page.locator("id=reloadIcon");
        this.usernameTextBox = page.locator("id=username");
        this.passwordTextBox = page.locator("id=password");
        this.captcha         = page.locator("id=captcha");
        this.loginButton     = page.locator("id=login");
        this.otp             = page.locator("id=otp");
        this.submitOtp       = page.locator("id=authenticateOTP");
        this.backtologinbtn  = page.getByText("Back to Login");
        this.error_msg       = page.locator("//div[@class='alert alert-danger']")

    }

    async openApplication(){
        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/.*HDFC Corporate Credit Card Portal/);


    }

    async login(usernameVal : string , passwordVal : string , captchaVal : string , otpVal : string ): Promise<void>{
        // await this.header.isVisible();
        await this.usernameTextBox.click();
        // await this.captchref.click();       
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
        await this.header.isVisible();
        await this.usernameTextBox.isVisible();
    }

    async invalidlogin(usernameVal : string , passwordVal : string , captchaVal : string, otpVal : string): Promise<void>{
        await this.header.isVisible();
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(usernameVal);
        await this.passwordTextBox.fill(passwordVal);
        await this.captcha.fill(captchaVal);
        await this.loginButton.click();
        await expect.soft(this.error_msg).toHaveText(errors[0].invalid_login);


    }


}