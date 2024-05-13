import {Locator, Page, expect} from "@playwright/test"
import { errors } from "../testData/loginData.json";
import faker from 'faker';
import { deflateRawSync } from "zlib";

export class profilePage{
    readonly page : Page;
    readonly profileicon : Locator;
    readonly profilelist : Locator;
    readonly viewprofileicon  : Locator;
    readonly logouticon : Locator;
    readonly personaldetails : Locator;
    readonly companydetails : Locator;
    readonly resetpassword  : Locator;
    readonly allusers : Locator;
    readonly approvalStr : Locator;
    readonly selectdrop: Locator;
    readonly selectdropmenu : Locator;
    readonly selectdropmenuselect : Locator;
    readonly selectdropmenuuid  : Locator;
    readonly search : Locator;
    readonly reset : Locator;
    readonly filter : Locator;
    readonly filtermenu : Locator;
    readonly filtermenurole : Locator;
    readonly filtermenustatus : Locator;
    readonly clearfilter : Locator;
    readonly applyfilter : Locator;
    readonly submit : Locator;
    readonly list : Locator;
    readonly profilecard : Locator;
    readonly userid : Locator;
    readonly rolename: Locator;
    readonly status : Locator;

    constructor(page : Page) {
        this.page                  = page;
        this.profileicon           = page.locator("//*[@id='iconUserProfile']")
        this.profilelist           = page.locator("//div[@class='list-group list-group-flush userDropData']")
        this.viewprofileicon       = page.locator("//div[@class='list-group-item']//span[text()='View Profile']")
        this.logouticon            = page.locator("//div[@class='list-group-item']//span[text()='Log Out']")
        this.personaldetails       = page.locator("//div[@class='Details']//h4[text()='Personal Details']")
        this.companydetails        = page.locator("//div[@class='Details']//h4[text()='Company Details']")
        this.resetpassword         = page.locator("//li[@class='nav-item']//button[text()='Reset Password']")
        this.allusers              = page.locator("//li[@class='nav-item']//button//span[text()='All Users']")
        this.approvalStr           = page.locator("//li[@class='nav-item']//button[text()='Approval Structures']")
        this.selectdrop            = page.locator("//div[@class='checkbox-selects']//button[text()=' Open Custom Dropdown ']")
        this.selectdropmenu        = page.locator("//div[@class='custom-dropdown']")
        this.selectdropmenuselect  = page.locator("//div[@class='custom-dropdown']//div[text()='Select']")
        this.selectdropmenuuid     = page.locator("//div[@class='custom-dropdown']//div[text()='User ID']")
        this.search                = page.locator("//input[@id='search']")
        this.reset                 = page.locator("//span[@class='inputText text-primary me-2']");
        this.filter                = page.locator("//div[@class='btn-content'][normalize-space()='Filter']");
        this.filtermenu            = page.locator("//div[@class='noc-accord applyFilterDiv p-0']")
        this.filtermenurole        = page.locator("//div[@class='accordian-wrapper']//div//div[text()='Role']")
        this.filtermenustatus      = page.locator("//div[@class='accordian-wrapper']//div//div[text()='Status']")
        this.clearfilter           = page.locator("//button//div[text()='Clear']")
        this.applyfilter           = page.locator("//button//div[text()='Apply']")
        this.list                  = page.locator("//div[@class='accordion-content']")
        this.submit                = page.locator("//div[@class='btn-content'][normalize-space()='Submit']")
        this.profilecard           = page.locator("//div[@class='card profileCard']")
        this.userid                = page.locator("(//div[@class='bottomData']//p[@class='text-nutralGray fs-8 fw-semibold'])[2]")
        this.rolename              = page.locator("(//div[@class='bottomData']//p[@class='text-nutralGray fs-8 fw-semibold'])[1]")
        this.status                = page.locator("(//div[@class='card-body']//span[@class='badge chips chip-success'])[1]")


    }

    async iconprofile() : Promise<void>{
        await this.profileicon.click();
        await expect(this.profilelist).toBeVisible();
    }

    async viewprofile() : Promise<void>{
        await this.viewprofileicon.click();
        await this.page.waitForTimeout(3000);
        await expect(this.personaldetails).toBeVisible();
        await expect(this.companydetails).toBeVisible();
    }

    async resetpasswordfunctionality() : Promise<void>{
        await this.resetpassword.click();
    }

    async alluserSelectmenu() : Promise<void>{
        await this.allusers.click();
        await this.selectdrop.click({delay : 3000});
        await expect(this.selectdropmenu).toBeVisible();
        await this.selectdropmenuuid.click();
        await this.search.isVisible();
        await this.reset.isEnabled();
        await this.filter.click();
        await expect(this.filtermenu).toBeVisible();
        await this.filtermenurole.click();
        await expect(this.list).toBeVisible();
        await this.filtermenustatus.click();
        await expect(this.list).toBeVisible();
        await this.applyfilter.isVisible();
        await this.clearfilter.isVisible();
    }

    async useridselect(useridval : string) : Promise<void> {
        await this.allusers.click();
        await this.selectdrop.click({delay : 3000});
        await expect(this.selectdropmenu).toBeVisible();
        await this.selectdropmenuuid.click();
        await this.search.fill(useridval);
        await this.submit.click();
        await this.page.waitForTimeout(5000);
        await expect(this.profilecard).toBeVisible();
        await expect(this.profilecard).toHaveCount(1);
        const userid = await this.userid.inputValue();
        expect(userid).toBe(useridval);
    }

    async logout() : Promise<void>{
        await this.logouticon.click();
    }


}