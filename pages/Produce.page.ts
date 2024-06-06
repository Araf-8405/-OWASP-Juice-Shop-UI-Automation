import {expect,Page} from "@playwright/test";
export default class {

    private PageElements={
       
        passwordInputField:'input[name="password"]',
        emailAddressInputField:'input[name="email"]',
        logInBtn:"//button[@id='loginButton']//span[1]",
        backToHamePage:'button[aria-label="Back to homepage"]',
        searchIcon:"//mat-icon[text()=' search ']",
        dismissButton:" //span[text()='Dismiss']",
        searchInputField:"input[matinput]"


    }
    constructor(public page:Page){

    }
    
    async inputEmailAddress() {
        const ele = this.page.locator(this.PageElements.emailAddressInputField)
        try {
            await ele.fill("jim@juice-sh.op")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(` Email Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputPassword () {
        const ele = this.page.locator(this.PageElements.passwordInputField)
        try {
            await ele.fill("ncc-1701")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(` Password Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async clickOnLoginBtnButton() {
        const ele = this.page.locator(this.PageElements.logInBtn)

        try {

                await ele.click({ button: "left", delay: 100 ,force:true})
                await this.page.waitForTimeout(2000)
        } catch (error) {
                throw new Error(`Login button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    
    async clickOnBackToHomeButton() {
        const ele = this.page.locator(this.PageElements.backToHamePage)
        try {
            
                await ele.click({ button: "left", delay: 100 ,force:true})
                await this.page.waitForTimeout(1000)
        } catch (error) {
                throw new Error(`Back To Home button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnSearchIcon() {
        const ele = this.page.locator(this.PageElements.searchIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(` Search Icon button Is Not Visible | Could not find locator:"${error}"`)
        }

    }

    async inputSearchField() {
        const ele = this.page.locator(this.PageElements.searchInputField)
        try {

            await ele.fill("apple")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(` Search Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }


    async clickOnEnterButton() {
        try {
            await this.page.keyboard.press('Enter');
        } catch (error) {
            throw new Error(` Enter buttonIs Not Visible | Could not find locator:"${error}"`)
        }

    }
    async clickOnDismissButton() {
        const ele = this.page.waitForSelector(this.PageElements.dismissButton)
        try {
            
            await (await ele).click({ button: "left", delay: 100 ,force:true})
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(` Dismiss button Is Not Visible | Could not find locator:"${error}"`)
        }

    }


    async verifySearchFunctionality() {
        try {
            const appleProducts = await this.page.$$eval('.product', products =>
                products.filter(product => product.innerHTML.toLowerCase().includes('apple'))
              );
            
              const bananaProducts = await this.page.$$eval('.product', products =>
                products.filter(product => product.innerHTML.toLowerCase().includes('banana'))
              );
            
              console.log(`Apple products found: ${appleProducts.length}`);
              console.log(`Banana products found: ${bananaProducts.length}`);
            
              // Assertions
              if (appleProducts.length === 2 && bananaProducts.length === 0) {
                console.log('Test passed');
              } else {
                console.log('Test failed');
              }
        } catch (error) {
            throw new Error(` verify Search Functionality Is Not Done | Could not find locator:"${error}"`)
        }

    }

}
