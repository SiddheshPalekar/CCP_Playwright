import {Locator, Page, expect} from "@playwright/test"

export class corporateUser{
    readonly page : Page;
    readonly corpuser :  Locator;
    readonly corproleandpermission : Locator;
    readonly users : Locator;
    readonly corpapprovepolicy : Locator;
    readonly roleandpermissiontitle : Locator;
    readonly relationshipnum : Locator;
    readonly submit : Locator;
    readonly roletable : Locator;
    readonly rolecount  : Locator;
    

    constructor(page : Page){
        this.page                            = page;
        this.corpuser                        = page.locator("//span[normalize-space()='Corporate User']")
        this.corproleandpermission           = page.locator("//div[@class='mainMenu active']//span[contains(text(),'Roles & Permissions')]")
        this.users                           = page.locator("//div[@class='mainMenu active']//div[@class='subMenu']//span[contains(text(),'Users')]")
        this.corpapprovepolicy               = page.locator("//div[@class='subMenu']//span[contains(text(),'Corporate Approval Policy')]")
        this.roleandpermissiontitle          = page.locator("//h3[normalize-space()='Roles & Permissions']")
        this.relationshipnum                 = page.locator("//input[@id='relationshipNumber']")
        this.submit                          = page.locator("//button//div[text()='Submit']")
        this.roletable                       = page.locator("//div[@class='mainTable roleTable']")
        this.rolecount                       = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr")
    }

    async corporateusermenu() : Promise<void>{
        await this.corpuser.click();
        expect(this.corproleandpermission).toBeVisible();
        expect(this.users).toBeVisible();
        expect(this.corpapprovepolicy).toBeVisible();
    }

    async corproleandpermissiontabclick() : Promise<void>{
        await this.corproleandpermission.click();
        await this.page.waitForTimeout(3000);
        expect (this.roleandpermissiontitle).toBeVisible();
    }

    async enterrelationshipno(relationnum : string) : Promise<void>{
        await this.relationshipnum.click();
        await this.relationshipnum.fill(relationnum);
        await this.submit.click();
        await this.page.waitForTimeout(9000);
    }

    async roleandpermissiontable() : Promise<void>{
        expect (this.roletable).toBeVisible();
        const rowcount = await this.rolecount.count();
        const tabledata : {[key : string] : string} = {};      
        for(let i=1; i<=rowcount ; i++ ){
            console.log(i)
            const rolenameselector = `//tbody//tr[${i}]//td[@datath="Roles"]`
            const rolename = await this.page.textContent(rolenameselector)
            const firstactionselector  = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Action']//div[1]//div[1]`;
            const firstactiontext  = await this.page.textContent(firstactionselector);
            const secondactionselector = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Action']//div[1]//div[2]`;
            const secondactiontext = await this.page.textContent(secondactionselector);
            tabledata[firstactiontext?.trim() ?? '']= secondactiontext?.trim() ?? '';
            Object.keys(tabledata).forEach((key) => {
                if (key !== firstactiontext?.trim() ?? '') {
                  delete tabledata[key];
                }
              });
            console.log(rolename , tabledata)
            if(firstactiontext == 'Edit'){
                expect (secondactiontext).toBe('Disable')       
            }           
            else if(firstactiontext == 'Disabled'){ 
                expect (secondactiontext).toBe(' Enable ')                              
            } 
        }
    }

    async editrole() : Promise<void>{
        expect (this.roletable).toBeVisible();
        const rowcount = await this.rolecount.count();      
        for(let i=1; i<=rowcount ; i++ ){
            const rolenameselector = `//tbody//tr[${i}]//td[@datath="Roles"]`
            const rolename = await this.page.textContent(rolenameselector)
            
        }
    }
}