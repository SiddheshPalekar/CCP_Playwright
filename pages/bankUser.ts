import {Locator, Page, expect} from "@playwright/test"
import { table } from "console";
import { TransformStreamDefaultController } from "node:stream/web";
import { lcov } from "node:test/reporters";
import { constrainedMemory } from "process";

export class bankUser{

    readonly page : Page;
    readonly bankuser : Locator;
    readonly roleandpermission : Locator;
    readonly createrole : Locator;
    readonly roletable : Locator;
    readonly rolecount : Locator;
    readonly rolename : Locator;
    readonly firstactiontable : Locator;
    readonly secondactiontable : Locator;
    readonly enterrole : Locator;
    readonly editroletitle : Locator;
    readonly accessalllink: Locator;
    readonly generalpermission : Locator;
    readonly UAMlink: Locator;
    readonly carddetailspage : Locator;
    readonly reports : Locator;
    readonly servicereq : Locator;
    readonly FAQlink : Locator;
    readonly auditrail : Locator; 
    readonly arrowup : Locator;
    readonly arrowdown : Locator;
    readonly actions : Locator;
       
    readonly users : Locator;
    readonly bankusertitle : Locator;
    readonly selectdrop : Locator;
    readonly selectdropmenu : Locator;
    readonly selectdropmenuuid  : Locator;
    readonly search : Locator;
    readonly reset : Locator;
    readonly submit : Locator;
    readonly userid : Locator;
    readonly filterbystatus : Locator;
    readonly totalstatus : Locator;
    readonly totalrole : Locator;
    readonly activestatus : Locator;
    readonly activerole : Locator;
    readonly filterbyrole : Locator;
    readonly createuser : Locator;
    readonly clear : Locator;
    readonly apply : Locator;
    readonly bankuserstablerow : Locator;
    readonly singleuser : Locator;
    readonly bulkuser : Locator;
    readonly firstname : Locator;
    readonly lastname : Locator;
    readonly mobilenumber : Locator;
    readonly emailid :  Locator;
    readonly empcode : Locator;
    readonly role : Locator;
    readonly branchcode : Locator;
    readonly branchname : Locator;
    readonly supercode : Locator;
    readonly deptname : Locator;
    readonly deptcode : Locator;
    readonly cancel : Locator;

    readonly bankapprovepolicy : Locator;
    readonly bankapprpolicytitle : Locator;
    readonly createpolicybtn : Locator;
    readonly createbankpolicytitle : Locator;
    readonly selectfunctionality : Locator;
    readonly selectsubfunctionality : Locator;
    readonly activecreation : Locator;
    readonly workflowYes : Locator;
    readonly workflowNo : Locator;
    readonly workflow : Locator;
    readonly togglebtn : Locator;
    readonly togglebtntext : Locator;


    constructor(page : Page){
        this.page                   = page;
        this.bankuser               = page.locator("//span[normalize-space()='Bank Users']")
        this.roleandpermission      = page.locator("//div[@class='mainMenu active']//span[contains(text(),'Roles & Permissions')]")
        this.createrole             = page.locator("//div[@class='btn-content'][normalize-space()='+ Create Role']")
        this.roletable              = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody")
        this.rolecount              = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr")
        this.rolename               = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[1]//td[@datath='Roles']")
        this.firstactiontable       = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[1]//td[@datath='Action']//div[1]//div[1]")
        this.secondactiontable      = page.locator("//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[1]//td[@datath='Action']//div[1]//div[2]")
        this.enterrole              = page.locator("//input[@id='roleName']")
        this.editroletitle          = page.locator("//h3[normalize-space()='Edit Role']")
        this.accessalllink          = page.locator("//div[@class='quickLinks']//a[text()='All']")
        this.generalpermission      = page.locator("//div[@class='quickLinks']//a[text()='General Permissions']")
        this.UAMlink                = page.locator("//div[@class='quickLinks']//a[text()='UAM']")
        this.carddetailspage        = page.locator("//div[@class='quickLinks']//a[text()='Card Details Page']")
        this.reports                = page.locator("//div[@class='quickLinks']//a[text()='Reports']")
        this.servicereq             = page.locator("//div[@class='quickLinks']//a[text()='Service Requests']")
        this.FAQlink                = page.locator("//div[@class='quickLinks']//a[text()='FAQs']")
        this.auditrail              = page.locator("//div[@class='quickLinks']//a[text()='Audit Trail']")
        this.arrowup                = page.locator("//div[@class='col-12 mb-3 roleDiv active']//div[@class='viewDivHeadingIcon']//*[@id='arrowUp']")
        this.arrowdown              = page.locator("//div[@class='col-12 mb-3 roleDiv active']//div[@class='viewDivHeadingIcon']//*[@id='arrowDown']")
      
        this.users                  = page.locator("//div[@class='mainMenu active']//div[@class='subMenu']//span[contains(text(),'Users')]")
        this.bankusertitle          = page.locator("//h3[normalize-space()='Bank Users']")
        this.selectdrop             = page.locator("//div[@class='checkbox-selects']//button[text()=' Open Custom Dropdown ']")
        this.selectdropmenu         = page.locator("//div[@class='custom-dropdown']")
        this.selectdropmenuuid      = page.locator("//div[@class='custom-dropdown']//div[text()='User ID']")
        this.search                 = page.locator("//input[@id='search']")
        this.reset                  = page.locator("//span[@class='inputText text-primary me-2']");
        this.submit                 = page.locator("//div[@class='btn-content'][normalize-space()='Submit']")
        this.userid                 = page.locator("//table//td[@datath='UserID']")
        this.filterbystatus         = page.locator("//button//div[@class='btn-content'][text()=' Filter By Status ']")
        this.totalstatus            = page.locator("//div[@id='flavors']//div")
        this.totalrole              = page.locator("//div[@id='flavors1']//div")
        this.activestatus           = page.locator("//div[@id='flavors']//div//label[@class='form-check-label active']//span")
        this.activerole             = page.locator("//div[@id='flavors1']//div//label[@class='form-check-label active']//span")
        this.filterbyrole           = page.locator("//button//div[@class='btn-content'][text()=' Filter By Role ']")
        this.createuser             = page.locator("//button//div[@class='btn-content'][text()='+ Create User']")
        this.clear                  = page.locator("//button//div[@class='btn-content'][text()='Clear']")
        this.apply                  = page.locator("//button//div[@class='btn-content'][text()='Apply']")
        this.bankuserstablerow      = page.locator("//table[@role='table']//tbody//tr")
        this.singleuser             = page.locator("//ul[@role='menu']//li//a[normalize-space()='+ Single User']")
        this.bulkuser               = page.locator("//ul[@role='menu']//li//a[normalize-space()='+ Bulk User']") 
        this.firstname              = page.locator("//input[@id='firstName']")
        this.lastname               = page.locator("//input[@id='lastName']")
        this.mobilenumber           = page.locator("//input[@id='mobileNumber']")
        this.emailid                = page.locator("//input[@id='emailId']")
        this.empcode                = page.locator("//input[@id='employeeCode']")
        this.role                   = page.locator("//select[@id='role']")
        this.branchcode             = page.locator("//input[@id='branchCode']")
        this.branchname             = page.locator("//input[@id='branchName']")
        this.supercode              = page.locator("//input[@id='supCode']")
        this.deptname               = page.locator("//input[@id='deptName']")
        this.deptcode               = page.locator("//input[@id='deptCode']")
        this.cancel                 = page.locator("//div[@class='btn-content'][normalize-space()='Cancel']")

        this.bankapprovepolicy      = page.locator("//div[@class='subMenu']//span[contains(text(),'Bank Approval Policy')]")    
        this.bankapprpolicytitle    = page.locator("//h3[normalize-space()='Bank Approval Policy']")
        this.createpolicybtn        = page.locator("//div[@class='btn-content'][normalize-space()='+ Create Policy']")
        this.createbankpolicytitle  = page.locator("//h3[normalize-space()='Create Bank Approval Policy']")
        this.selectfunctionality    = page.locator("//div//select[@id='functionality']")
        this.selectsubfunctionality = page.locator("//div//select[@id='subFunctionality']")
        this.activecreation         = page.locator("//a[@class='active nav-link']//span")
        this.workflowYes            = page.locator("//div//label//span[normalize-space()='Yes']")
        this.workflowNo             = page.locator("//div//label//span[normalize-space()='No']")
        this.workflow               = page.locator("//div[@class='addLevelBox withGrid']")
        this.togglebtn              = page.locator("//div[@class='button r']")
        this.togglebtn              = page.locator("//div[@class='button r']//input")
    }

    async bankusermenu() : Promise<void>{
        await this.bankuser.click();
        expect(this.roleandpermission).toBeVisible();
        expect(this.users).toBeVisible();
        expect(this.bankapprovepolicy).toBeVisible();
    }

    async roleandpermissiontabclick() : Promise<void>{
        await this.roleandpermission.click();
        await this.page.waitForTimeout(3000);
        await expect(this.roletable).toBeVisible();
    }
    async roleandpermissiontableaction() : Promise<void>{        
        const rowcount = await this.rolecount.count();
        console.log(rowcount)
        // const cellValues : string[] = [];
        const tabledata : {[key : string] : string} = {};
        for(let i=1; i<rowcount ; i++ ){
            const firstactionselector  = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Action']//div[1]//div[1]`;
            const firstactiontext  = await this.page.textContent(firstactionselector);
            const secondactionselector = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Action']//div[1]//div[2]`;
            const secondactiontext = await this.page.textContent(secondactionselector);
            tabledata[firstactiontext?.trim() ?? '']= secondactiontext?.trim() ?? '';
            console.log(tabledata) 
            if(firstactiontext == 'Edit'){
                expect (secondactiontext).toBe('Disable')                  
            }
            if(firstactiontext == 'Disabled'){ 
                expect (secondactiontext).toBe(' Enable ')
                continue
            }
                             
        }
    }

    async editrole() : Promise<void>{
        const rowcount = await this.rolecount.count();
        console.log(rowcount)
        for(let i=1; i<rowcount ; i++ ){
            const firstactionselector  = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Action']//div[1]//div[1]`;
            const firstactiontext  = await this.page.textContent(firstactionselector);
            console.log(firstactiontext)        
                if (firstactiontext == ' Edit '){
                    const tableroleselector = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Roles']`
                    const tablerole  = await this.page.textContent(tableroleselector);
                    console.log(tablerole)                                  
                    await this.firstactiontable.click();
                    await this.page.waitForTimeout(5000);
                    break  
                }
                else{
                    continue
                }
        }
                
        await expect(this.editroletitle).toBeVisible();

    }
    async EnableRole() : Promise<void>{
        const rowcount = await this.rolecount.count();
        console.log(rowcount)
        for(let i=1; i<rowcount ; i++ ){
            const firstactionselector  = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Action']//div[1]//div[1]`;
            const firstactiontext  = await this.page.textContent(firstactionselector);
            console.log(firstactiontext)
                if (firstactiontext == 'Disabled'){
                    await this.secondactiontable.click();
                break  
                }
                else{
                    continue
                }
        }
        
    }

    async editselectedrole() : Promise<void>{
        const rowcount = await this.rolecount.count();
        console.log(rowcount)
        for(let i=1; i<rowcount ; i++ ){
            const tableroleselector = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Roles']`
            const tablerole  = await this.page.textContent(tableroleselector);
            console.log(tablerole)          
            if (tablerole == 'Testing'){               
                const firstactionselector  = `//table[@class='table b-table table-hover b-table-stacked-md table-striped']//tbody//tr[${i}]//td[@datath='Action']//div[1]//div[1]`;
                const firstactiontext  = await this.page.textContent(firstactionselector);
                console.log(firstactiontext) 
                await  this.page.click(firstactionselector);
                await this.page.waitForTimeout(7000);
                break       
            }      
        }
    }


    async quickAccesslinksallrole() : Promise<void>{
        const listmenu = await this.page.$$(`ul > li`);      
        const listitemcount = listmenu.length;
        console.log(listitemcount)
        for (let i=1 ; i < listitemcount ; i++){
            const listitem = listmenu[i];
            const listtext = await listitem.textContent();
            console.log(listtext)
            await listmenu[i-1].click()
            await listmenu[i].click()                       
            const quicklinkselector = `(//h4[@class="text-nutralGray"])[${i}]`
            const quicklinktext = await this.page.textContent(quicklinkselector);           
            console.log(quicklinktext)
            if(listtext==quicklinktext){ 
                if (i>=2&&i<=listitemcount){
                    const togglebtnselector = `//input[@type='checkbox'][@value='${quicklinktext}']`
                    await this.page.click(togglebtnselector);
                    await this.arrowup.click();
                }
                continue
            }
            break
        }
        

    }

    async quickaccessselectpermission(validtab : string , activitytext : string) {
        await this.arrowdown.click();
        const listmenu = await this.page.$$(`ul > li`);      
        const listitemcount = listmenu.length;
        console.log(listitemcount)
        for (let i=1 ; i < listitemcount ; i++){
            const listitem = listmenu[i];
            const listtext = await listitem.textContent();
            console.log(listtext)
            await listmenu[i-1].click()
            await listmenu[i].click() 
            if (listtext == validtab){
                const activitylocator =  `//div[@class='form-check form-switch']//input[@class='float-end form-check-input'][@value='${activitytext}']`
                await this.page.click(activitylocator)
                break
            }
        }
    }

    async createrolemethod(rolename : string) {
        await this.createrole.click();
        await this.page.waitForTimeout(3000);
        await this.enterrole.fill(rolename);        
    }

    async multipleroleselection(tab : string , role : string, tab1: string, role1: string){
        await this.arrowdown.click();
        const listmenu = await this.page.$$(`ul > li`);      
        const listitemcount = listmenu.length;
        console.log(listitemcount)
        for (let i=1 ; i < listitemcount ; i++){
            const listitem = listmenu[i];
            await listmenu[i-1].click()
            await listmenu[i].click()  
            const listtext = await listitem.textContent();
            console.log(listtext)
            if (listtext == tab){
                const activitylocator = `//div[@class='form-check form-switch']//input[@class='float-end form-check-input'][@value='${role}']`
                await this.page.click(activitylocator)                 
                for (let j=i+1 ; j < listitemcount ; j++){
                    const listitem1 = listmenu[j];
                    await listmenu[j].click() 
                    await listmenu[j-1].click() 
                    const listtext1 = await listitem1.textContent();
                    console.log(listtext1)
                    if (listtext1?.trim() == tab1){                   
                    const activitylocator1 =  `//div[@class='form-check form-switch']//input[@class='float-end form-check-input'][@value='${role1}']`
                    await this.page.click(activitylocator1)
                    break
                    }
                }
            break
             }
        }
    }

    async userfieldclick(): Promise<void>{
        await this.users.click();
        await this.page.waitForTimeout(3000);
        expect (this.bankusertitle).toBeVisible();
    }

    async resetuserid(userid : string){
        await this.selectdrop.click();
        expect (this.selectdropmenu).toBeVisible();
        await this.selectdropmenuuid.click();
        await this.search.click();
        await this.search.fill(userid); 
        await this.reset.click();
        expect (this.search).toBeEmpty();
    }

    async useridsearch(userid : string): Promise<void>{
        await this.selectdrop.click();
        expect (this.selectdropmenu).toBeVisible();
        await this.selectdropmenuuid.click();
        await this.search.click();
        await this.search.fill(userid);
        await this.submit.click();
        await this.page.waitForTimeout(2000);
        const useridval =  await this.userid.textContent();
        console.log(useridval)
        expect (useridval).toBe(userid)
    }

    async filterbystatusbankusers(status : string): Promise<void> {
        await this.filterbystatus.click();
        const statuscount = await this.totalstatus.count();
        for (let i=1 ; i <= statuscount ; i++){
            const statusvalueselector = `//div[@id='flavors']//div[${i}]//label//span`
            const statusvalue = await this.page.textContent(statusvalueselector);
            console.log(statusvalue)
            if (statusvalue == status){
            const result = statusvalue?.toUpperCase()
            const valueselector = `//div[@id='flavors']//div[${i}]//input[@value='${result}']`
            await this.page.click(valueselector)
            break
            }

        }
        await this.apply.click();
    }

    async clearstatusfilter():Promise<void>{
        await this.filterbystatus.click();
        if (await this.activestatus.isVisible()){
            await this.clear.click();
           expect(await this.activestatus.isVisible()).toBeFalsy();
        }
    }

    async bankusertablestatus() : Promise<void>{
        await this.filterbystatus.click();
        const activevalue = await this.activestatus.textContent();
        console.log(activevalue)
        await this.apply.click();
        const activestatusval = activevalue?.toLowerCase()
        console.log(activestatusval)
        const rowcount = await this.bankuserstablerow.count()
        for(let i=1 ; i <= rowcount ; i++){
            const tablestatusselector = `//table//tbody//tr[${i}]//td[@datath="Status"]//div//span`
            const tablestatus = await this.page.textContent(tablestatusselector);
            expect (tablestatus).toBe(activestatusval)
            console.log(i)
        }
    }

    async filterbyrolebankusers(role : string): Promise<void>{
        await this.filterbyrole.click();
        await this.page.waitForTimeout(3000);
        const rolecount = await this.totalrole.count();
        for (let i=1 ; i<=rolecount ; i++){
            const rolevalueselector = `//div[@id='flavors1']//div[${i}]//label//span`
            const rolevalue = await this.page.textContent(rolevalueselector)
            console.log(rolevalue)
            if (rolevalue == role){
                await this.page.click(rolevalueselector)
                break
            }
        }
        await this.apply.click();
    }

    async bankusertablerole():Promise<void>{
        await this.filterbyrole.click();
        const activevalue = await this.activerole.textContent();
        console.log(activevalue)
        await this.apply.click();
        const rowcount = await this.bankuserstablerow.count()
        for(let i=1 ; i <= rowcount ; i++){
            const tableroleselector = `//table//tbody//tr[${i}]//td[@datath="Role"]`
            const tablerole = await this.page.textContent(tableroleselector);
            expect (tablerole).toBe(activevalue)
            console.log(i)
        }

    }

    async cancelcreatesingleuser(): Promise<void>{
        await this.createuser.click();
        await this.singleuser.click();
        await this.submit.isDisabled();
        await this.cancel.click();
        expect (this.bankusertitle).toBeVisible();
    }

    async createsingleuser(firstname: string, lastname: string, mobile: string,email: string,emplcode: string,role : string,bcode : string,bname: string,supcode: string,depname: string,depcode: string):Promise<void>{
        await this.createuser.click();
        await this.singleuser.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.mobilenumber.fill(mobile);
        await this.emailid.fill(email);
        await this.empcode.fill(emplcode);
        await this.role.click();
        await this.page.waitForTimeout(2000);
        await this.role.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.role.pressSequentially(role);
        await this.page.waitForTimeout(2000);
        await this.role.press('Enter');
        await this.branchcode.fill(bcode);
        await this.branchname.fill(bname);
        await this.supercode.fill(supcode);
        await this.deptname.fill(depname);
        await this.deptcode.fill(depcode);
        await this.submit.isEnabled();
        // await this.submit.click();   
    }

    async bankapprovalpolicyclick():Promise<void>{
        await this.bankapprovepolicy.click();
        expect (this.bankapprpolicytitle).toBeVisible();
    }

    async createpolicy(functionality: string, subfunctionality:string):Promise<void>{
        await this.createpolicybtn.click();
        await this.page.waitForTimeout(2000);
        await this.selectfunctionality.click();
        await this.selectfunctionality.pressSequentially(functionality);
        await this.selectfunctionality.press('Enter')
        await this.selectsubfunctionality.click();
        await this.selectsubfunctionality.pressSequentially(subfunctionality);
        await this.selectsubfunctionality.press('Enter')
        await this.page.waitForTimeout(2000);
    }

    async singlecreationapprovalpolicy(actcreate : string):Promise<void>{
        const active = await this.activecreation.textContent();
        expect (active).toBe(actcreate);
        console.log(active)
        await this.workflowYes.click();
        expect (this.workflow).toBeVisible();
        const loc = `//div[@class="form-check form-check-inline"]//label`
        const status = await this.page.getAttribute(loc,'class')
        console.log(status)
        expect(status?.trim()?? "").toContain("active")
            
        }
    
    async noworkflow(actcreate : string): Promise<void>{
        const active = await this.activecreation.textContent();
        expect (active).toBe(actcreate);
        console.log(active)
        await this.workflowNo.click();
        expect (this.workflow).not.toBeVisible();
    }
    async validateaddapprovers() : Promise<void>{
        await this.togglebtn.click();

    }

}
    