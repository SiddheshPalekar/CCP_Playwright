import {Locator, Page, expect} from "@playwright/test"
import { isAbsolute } from "node:path/win32";

export class forgetPassword{

    readonly page : Page;
    readonly header : Locator;
    readonly forgetPasswordbutton : Locator;
    readonly forgetPasswordtitle : Locator;
    readonly username : Locator;
    readonly phoneNumber: Locator;
    readonly captcha : Locator;
    readonly submitbtn : Locator;
    readonly tmpPassword: Locator;
    readonly error_msg: Locator;
    readonly single_field_x : Locator;
    readonly double_field_x : Locator;
    readonly captch_img : Locator;
    readonly reload_captcha : Locator;
    readonly field_error_msg : Locator;
    readonly field_error_msg_1 :  Locator;
    readonly backtologinbtn : Locator;
    readonly doitlaterbtn: Locator;
    readonly loginbtn : Locator;
    readonly reset_password : Locator;
    readonly current_password : Locator;
    readonly new_password : Locator;
    readonly confirm_new_password : Locator;
    readonly reset_password_btn  : Locator;
    readonly alert : Locator;
    constructor(page : Page){
        this.page                 = page;
        this.forgetPasswordbutton = page.locator("//a[normalize-space()='Forgot Password ?']");
        this.forgetPasswordtitle  = page.locator("//h2[normalize-space()='Forgot Password']");
        this.username             = page.locator("//input[@id='username']");
        this.phoneNumber          = page.locator("//input[@id='mobileNumber']");
        this.captcha              = page.locator("//input[@id='captcha']");
        this.submitbtn            = page.locator("//button[@id='forgetPassword']");
        this.tmpPassword          = page.locator("//div//h4[@class='fw-semibold']");
        this.error_msg            = page.locator("//div[@class='alert alert-danger mt-5']");
        this.single_field_x       = page.locator("(//span[@class='inputIcon']//*[name()='svg'])[1]");
        this.double_field_x       = page.locator("(//span[@class='inputIcon']//*[name()='svg'])[2]");
        this.captch_img           = page.locator("//img[@id='captchaImage']");
        this.reload_captcha       = page.locator("//span[@class='cursorPointer px-4']//*[@id='reloadIcon']");
        this.field_error_msg      = page.locator("//div/span[@class='errorMessage']");
        this.field_error_msg_1    = page.locator("(//div/span[@class='errorMessage'])[2]");
        this.backtologinbtn       = page.locator("//a[normalize-space()='Back to Login']");
        this.header               = page.getByText("Login");
        this.doitlaterbtn         = page.locator("//button[@class='btn btn-primary btn-md noBorder w-auto']//div[text()='Do it Later']");  
        this.loginbtn             = page.locator("//button[@class='btn btn-primary btn-md w-auto']//div[text()='Login']");   
        this.reset_password       = page.getByText("Reset Password");
        this.current_password     = page.locator("//input[@id='currentPassword']");
        this.new_password         = page.locator("//input[@id='newPassword']");
        this.confirm_new_password = page.locator("//input[@id='confirmNewPassword']");
        this.reset_password_btn   = page.locator("//button[@id='changePasswordButton']");
        this.alert                = page.locator("//div[@role='alert']//p[@class='fs-7']");
    }

    async forgetPasswordclick():Promise<void>{
        await this.forgetPasswordbutton.click();
        await this.forgetPasswordtitle.isVisible();

    }

    async forgetPassworddetails(usernameVal : string , phonenumVal : string , captchaVal : string ):Promise<void>{
        await this.username.click();
        await this.username.fill(usernameVal);
        await this.phoneNumber.fill (phonenumVal);
        await this.captcha.fill(captchaVal);
        await expect(this.submitbtn).toBeEnabled();
        await this.submitbtn.click();
    }

    async temporaryPasswordtemplate(tmpPassMsg : string ) :Promise<void> {
        await this.tmpPassword.isVisible();
        const popup_msg = await this.tmpPassword.textContent();
        expect (popup_msg).toBe(tmpPassMsg);
    }

    async invalidDetailsError(error : string) :Promise<void> {
        await expect.soft(this.error_msg).toHaveText(error);
    }

    async clearfieldUsernameandMobileNumber(usernameVal : string , phonenumVal : string ) : Promise<void> {
        await this.username.click();
        await this.username.fill(usernameVal);
        await this.page.keyboard.press('Enter');
        await this.single_field_x.click();
        await expect(this.username).toBeEmpty();
        await this.phoneNumber.fill(phonenumVal);
        await this.page.keyboard.press('Enter');       
        await this.single_field_x.click();
        await expect(this.phoneNumber).toBeEmpty();
    }

    async validate_refresh_captcha() : Promise<void> {
        const captcha1 = await this.captch_img.getAttribute('src');
        await this.page.waitForTimeout(3000);
        await this.reload_captcha.click();       
        const captcha2 = await this.captch_img.getAttribute('src');
        expect(captcha1).not.toBe(captcha2);
    }

    async username_error_field(usernameVal : string, error : string ) : Promise<void>{
        await this.username.click();
        await this.username.fill(usernameVal);
        await this.username.clear();
        await expect.soft(this.field_error_msg).toHaveText(error);
    }

    async mobilenumber_error_field(phonenumVal : string, error : string, error1 : string){
        await this.phoneNumber.click();
        await this.phoneNumber.fill(phonenumVal);
        await this.page.keyboard.press('Enter'); 
        await expect.soft(this.field_error_msg_1).toHaveText(error);
        await this.phoneNumber.clear();
        await expect.soft(this.field_error_msg_1).toHaveText(error1);
    }

    async captcha_error_field(captchaVal : string, error : string, error1 : string){
        await this.captcha.click();
        await this.captcha.fill(captchaVal);
        await this.page.keyboard.press('Enter'); 
        await expect.soft(this.field_error_msg_1).toHaveText(error);
        await this.captcha.clear();
        await expect.soft(this.field_error_msg_1).toHaveText(error1);
    }

    async submit_button_functionality() : Promise<void> {
        const inputUser = await this.username.inputValue();
        expect(inputUser).toBe('');
        const inputPassword = await this.phoneNumber.inputValue();
        expect(inputPassword).toBe('');
        const inputCaptcha = await this.captcha.inputValue();
        expect(inputCaptcha).toBe('');
        await expect(this.submitbtn).toBeDisabled();

    }

    async backtologinfromforgetPassword() : Promise<void>{
        await expect(this.backtologinbtn).toBeEnabled();
        await this.backtologinbtn.click();
        await expect(this.header).toBeVisible;
    }
    
    async doitlaterfunctionality() : Promise<void>{
        await this.doitlaterbtn.click();
        await expect(this.forgetPasswordtitle).toBeVisible();
    }

    async loginafterforgetpw() : Promise<void>{
        await this.loginbtn.click();
        await this.alert.isVisible();
    }
    async resetpassword(currentpassword :string, newpassword : string, confirmpass : string ) : Promise<void>{
        await this.current_password.click();
        await this.current_password.fill(currentpassword);
        await this.new_password.fill(newpassword);
        await this.confirm_new_password.fill(confirmpass);
        await this.reset_password_btn.click();
    }
}