import { test as baseTest } from "@playwright/test";
import testData from "../testData/testData";
import addToBasket from  "../pages/Basket.page";
import product from  "../pages/Produce.page";

const test = baseTest.extend<{

    AddToBasket: addToBasket;
    testData: testData;
    Product: product 

}>({  
testData: async ({ page }, use) => {
    await use(new testData(page));
},
AddToBasket: async ({ page }, use) => {
    await use(new addToBasket((page)));
},
Product: async ({ page }, use) => {
    await use(new product((page)));
}

})

export default test;
export const expect = test.expect;
const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build",
        name: "Playwright Test",
        user: '',
        accessKey: '',
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', 
    },
};