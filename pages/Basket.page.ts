import {expect,Page} from "@playwright/test";
export default class addToBasket{

    private PageElements={
        addToBasketBtn:'button[aria-label="Add to Basket"]',
        yourBasketBtn:"//span[text()=' Your Basket']",
        checkoutButton:'button[id="checkoutButton"]',
        addANewAdress:"//span[text()='Add New Address']",
        countryInputField:"//input[@data-placeholder='Please provide a country.']",
        nameInputField:"//input[@data-placeholder='Please provide a name.']",
        mobileNumberInputField:"//input[@placeholder='Please provide a mobile number.']",
        adressRadioBtn:"mat-radio-button",
        submitBtn:"//button[@type='submit']",
        stateInputField:"//input[@data-placeholder='Please provide a state.']",
        cityInputField:"//input[@data-placeholder='Please provide a city.']",
        zipcodeInputField:"//input[@data-placeholder='Please provide a ZIP code.']",
        addtressInputField:"//textarea[@data-placeholder='Please provide an address.']",
    }
    constructor(public page:Page){

    }
    
    async addItemToBasket() {
        const ele = this.page.locator(this.PageElements.addToBasketBtn).first()
        try {
            await ele.click({ button: "left", delay: 100 ,force:true})
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`add Item To Basket button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnShowtheShoppingcartButton() {
        const ele = this.page.locator(this.PageElements.yourBasketBtn)
        try {

            await ele.click({ button: "left", delay: 100 ,force:true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
                throw new Error(`Add to cart button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }


    async clickOncheckoutButton() {
        const ele = this.page.locator(this.PageElements.checkoutButton)

        try {
            await ele.click({ button: "left", delay: 100 ,force:true})
            await this.page.waitForTimeout(1000)
        } catch (error) {
                throw new Error(`checkout button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }


    async clickOnAddANewAddressButton() {
        const ele = this.page.locator(this.PageElements.addANewAdress)

        try {
                await ele.click({ button: "left", delay: 100 ,force:true})
                await this.page.waitForTimeout(2000)
        } catch (error) {
                throw new Error(`Add a new address is not Successfully visible | Could not find locator:"${error}"`)
        }
    }


    async filledUpCountryInputField() {
        const ele = this.page.locator(this.PageElements.countryInputField)
        try {
            await ele.fill('Bangladesh')
            await this.page.waitForTimeout(2000)
        } catch (error) {
                throw new Error(`Country Input Field is not visible | Could not find locator:"${error}"`)
        }
    }
    
    async filledUpNameInputField() {
        const ele = this.page.locator(this.PageElements.nameInputField)
        try {

            await ele.fill("LAl Mia")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Name Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async filledUpMobileNumberInputField() {
        const ele = this.page.locator(this.PageElements.mobileNumberInputField)
        try {
            await ele.fill("0123456789")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(` Phone number Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }

        async filledUpAddressInputField() {
            const ele = this.page.locator(this.PageElements.addtressInputField)
            try {
                await ele.fill("2999 Tuscarora Trail, Middleburg, United States")
                await this.page.waitForTimeout(1000)
            } catch (error) {
                throw new Error(` Address Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputState() {
            const ele = this.page.locator(this.PageElements.stateInputField)
            try {
                await ele.fill("Texas")
                await this.page.waitForTimeout(1000)
            } catch (error) {
                throw new Error(` State Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputCity() {
            const ele = this.page.locator(this.PageElements.cityInputField)
            try {
                await ele.fill("Middleburg")
                await this.page.waitForTimeout(1000)
            } catch (error) {
                throw new Error(` City Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputZipcode() {
            const ele = this.page.locator(this.PageElements.zipcodeInputField)
            try {
                await ele.fill("75240")
                await this.page.waitForTimeout(1000)
            } catch (error) {
                throw new Error(` Zipcode Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async WaitForAddresssaving() {
            try {
                this.page.waitForSelector(this.PageElements.adressRadioBtn)
            } catch (error) {
                throw new Error(` radio button Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        
        async clickOnSubmitButton() {
            const ele = this.page.locator(this.PageElements.submitBtn)
    
            try {
                    await ele.click({ button: "left", delay: 100 ,force:true})
                    await this.page.waitForTimeout(2000)
            } catch (error) {
                    throw new Error(`Sbmit button is not Successfully visible | Could not find locator:"${error}"`)
            }
        }

    
}
