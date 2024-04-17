import {Locator, Page, expect} from "@playwright/test";

export class homePage{
    readonly page : Page;

    constructor(page : Page){
        this.page       = page;

    }

    async dashBoard(){
        await this.page.isVisible("id=hdfcLogo");
        

    }
}

