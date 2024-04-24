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
    readonly captchref  :  Locator;
    readonly error_msg :  Locator;
    readonly field_error_msg : Locator;

    constructor(page : Page){
        this.page                   = page;
        this.header                 = page.getByText("Login");
        this.captchref              = page.locator("id=reloadIcon");
        this.usernameTextBox        = page.locator("id=username");
        this.passwordTextBox        = page.locator("id=password");
        this.captcha                = page.locator("id=captcha");
        this.loginButton            = page.locator("id=login");
        this.otp                    = page.locator("id=otp");
        this.submitOtp              = page.locator("id=authenticateOTP");
        this.backtologinbtn         = page.getByText("Back to Login");
        this.error_msg              = page.locator("//div[@class='alert alert-danger']");
        this.field_error_msg        = page.locator("//div/span[@class='errorMessage']");

    }

    async openApplication():Promise<void>{
        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/.*HDFC Corporate Credit Card Portal/);


    }

    async login(usernameVal : string , passwordVal : string , captchaVal : string ): Promise<void>{
        await this.usernameTextBox.click();       
        await this.usernameTextBox.fill(usernameVal);
        await this.passwordTextBox.fill(passwordVal);
        await this.captcha.fill(captchaVal);
        await this.loginButton.click();
        // await this.page.pause();
    }

    async login_otp(otpVal : string ): Promise<void>{
        await this.otp.fill(otpVal);
        await this.submitOtp.click();
    }

    async backtologin(): Promise<void>{
        await this.backtologinbtn.click();
        await this.header.isVisible();
        await this.usernameTextBox.isVisible();
    }

    async invalidlogin_error_message(error : string): Promise<void>{
        await expect.soft(this.error_msg).toContainText(error);
        // await this.page.pause();
    }

    async clear_username(usernameVal : string ): Promise<void>{
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(usernameVal);
        await this.usernameTextBox.clear();    
    }

    async clear_password(passwordVal : string ): Promise<void>{
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill(passwordVal);
        await this.passwordTextBox.clear();    
    }

    async clear_captcha(captchaVal : string ): Promise<void>{
        await this.captcha.click();
        await this.captcha.fill(captchaVal);
        await this.captcha.clear();    
    }

    async enter_invalid_password(passwordVal : string): Promise<void>{
        await this.passwordTextBox.fill(passwordVal);    
    }

    async enter_invalid_captcha(captchaVal : string ): Promise<void>{
        await this.captcha.fill(captchaVal);
    }

    async field_error_message(error : string) : Promise<void>{
        await expect.soft(this.field_error_msg).toContainText(error);

    }




}