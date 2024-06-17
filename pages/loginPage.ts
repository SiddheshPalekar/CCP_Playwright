import {Locator, Page, expect} from "@playwright/test"
import { errors } from "../testData/loginData.json";
import faker from 'faker';

export class loginPage{


    readonly page : Page;
    readonly alert : Locator;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly captcha : Locator;
    readonly captch_img : Locator;
    readonly loginButton : Locator;
    readonly otp  : Locator;
    readonly submitOtp  : Locator;
    readonly header : Locator;
    readonly backtologinbtn : Locator;
    readonly captchref  :  Locator;
    readonly error_msg :  Locator;
    readonly field_error_msg : Locator;
    readonly pass_eye_open: Locator;
    readonly pass_eye_close: Locator;


    constructor(page : Page){
        this.page                   = page;
        this.alert                  = page.locator("//div[@role='alert']//p[@class='fs-7']");
        this.header                 = page.getByText("Login");
        this.captchref              = page.locator("id=reloadIcon");
        this.usernameTextBox        = page.locator("id=username");
        this.passwordTextBox        = page.locator("id=password");
        this.captch_img             = page.locator("id=captchaImage");
        this.captcha                = page.locator("id=captcha");
        this.loginButton            = page.locator("id=login");
        this.otp                    = page.locator("id=otp");
        this.submitOtp              = page.locator("id=authenticateOTP");
        this.backtologinbtn         = page.getByText("Back to Login");
        this.error_msg              = page.locator("//div[@class='alert alert-danger']");
        this.field_error_msg        = page.locator("//div/span[@class='errorMessage']");
        this.pass_eye_open          = page.locator("//span[@class='inputIcon']//*[@id='eyeIconOpen']");
        this.pass_eye_close         = page.locator("//span[@class='inputIcon']//*[@id='eyeIconClose']");
        
    }

    async openApplication(alertst : string):Promise<void>{
        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/.*HDFC Corporate Credit Card Portal/);
        const alertext = await this.alert.textContent();
        expect (alertext?.trim()).toBe(alertst);

    }

    async login(usernameVal : string , passwordVal : string , captchaVal : string ): Promise<void>{
        await this.usernameTextBox.click();       
        await this.usernameTextBox.fill(usernameVal);
        await this.passwordTextBox.fill(passwordVal);
        await this.captchref.click();
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
        await expect.soft(this.error_msg).toHaveText(error);
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
        await expect.soft(this.field_error_msg).toHaveText(error);

    }

    async length_of_usernamefield(maxlength_field : number) : Promise<void>{
        const maxlength = await this.usernameTextBox.getAttribute('maxlength');
        const randomValue = faker.random.alphaNumeric(maxlength);
        await this.usernameTextBox.click();
        await this.usernameTextBox.fill(randomValue);
        const inputValue = await this.usernameTextBox.inputValue();
        const lettercount = inputValue.replace(/[^a-zA-Z]/g,' ').length;
        expect (lettercount).toBe(maxlength_field);
    }

    async length_of_passwordfield(maxlength_field : number, minlength_field : string) : Promise<void>{
        const maxlength = await this.passwordTextBox.getAttribute('maxlength');
        const randomValue = faker.random.alphaNumeric(maxlength);
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill(randomValue);
        const inputValue = await this.passwordTextBox.inputValue();
        const lettercount = inputValue.replace(/[^a-zA-Z]/g,' ').length;
        expect (lettercount).toBe(maxlength_field);
        const minlength = await this.passwordTextBox.getAttribute('minlength');
        // const revalue = intvalue?.replace(/" "/g, ' '); 
        // console.log(revalue)
        expect (minlength).toBe(minlength_field);
    }

    async length_of_capchafield(maxlength_field : string, minlength_field : string) : Promise<void>{
        const maxlength = await this.captcha.getAttribute('maxlength');
        expect (maxlength).toBe(maxlength_field);
        const minlength = await this.captcha.getAttribute('minlength');
        expect (minlength).toBe(minlength_field);
    }

    async login_button_functionality() : Promise<void> {
        const inputUser = await this.usernameTextBox.inputValue();
        expect(inputUser).toBe('');
        const inputPassword = await this.passwordTextBox.inputValue();
        expect(inputPassword).toBe('');
        const inputCaptcha = await this.captcha.inputValue();
        expect(inputCaptcha).toBe('');
        await this.loginButton.isDisabled();

    }

    async validate_refresh_captcha() : Promise<void> {
        const captcha1 = await this.captch_img.getAttribute('src');
        await this.page.waitForTimeout(3000);
        await this.captchref.click();       
        const captcha2 = await this.captch_img.getAttribute('src');
        expect(captcha1).not.toBe(captcha2);
    }

    async password_eye_button() : Promise<void>{
        await this.pass_eye_close.isVisible();
        await this.pass_eye_close.click();
        await this.page.waitForTimeout(2000);
        await this.pass_eye_open.isVisible();

    }
}