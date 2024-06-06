import test,{expect } from '../fixtures/pomFixture';


test("Login with user, add 1 item to the basket, click on checkout, add a new address, fill in the address form, click on submit button", async ({ AddToBasket,Product, page, browser,testData,  }) => {

    await test.step("Navigate to Home Screen", async () => {
        await page.goto('#/login', { waitUntil: 'domcontentloaded' })
    })
    await test.step("Login with user", async () => {
        await Product.clickOnDismissButton()
        await Product.inputEmailAddress()
        await Product.inputPassword()
        await Product.clickOnLoginBtnButton()
        
    })
    await test.step("add 1 item to the basket", async () => {
        await AddToBasket.addItemToBasket()
        await AddToBasket.clickOnShowtheShoppingcartButton()
    })  
    await test.step("click on checkout", async () => {
        await AddToBasket.clickOncheckoutButton() 

    }) 
    await test.step("add a new address", async () => {
        await AddToBasket.clickOnAddANewAddressButton()
    }) 
    await test.step("fill in the address form & click on submit button", async () => {
        await AddToBasket.filledUpCountryInputField()
        await AddToBasket.filledUpNameInputField()
        await AddToBasket.filledUpMobileNumberInputField()
        await AddToBasket.inputZipcode()
        await AddToBasket.filledUpAddressInputField()
        await AddToBasket.inputCity() 
        await AddToBasket.inputState()
        await AddToBasket.clickOnSubmitButton()
        await AddToBasket.WaitForAddresssaving()
    })
})

test("Verify search button, search for apple, verify that 2 apple products show up and that banana product doesn't show up", async ({ AddToBasket,Product, page, browser,testData,  }) => {

    await test.step("Navigate to Home Screen", async () => {
        await page.goto('#/login', { waitUntil: 'domcontentloaded' })
    })
    await test.step("Login with user", async () => {
        await Product.clickOnDismissButton()
        await Product.inputEmailAddress()
        await Product.inputPassword()
        await Product.clickOnLoginBtnButton()
        
    })
    await test.step("search for apple", async () => {
        await Product.clickOnBackToHomeButton()
        await Product.clickOnSearchIcon()
        await Product.inputSearchField()
        await Product.clickOnEnterButton()
    })  
    await test.step("verify that 2 apple products show up and that banana product doesn't show up", async () => {
        await Product.verifySearchFunctionality()

    }) 
    
})