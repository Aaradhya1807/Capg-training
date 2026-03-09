// import {expect, test} from "@playwright/test";

// test("assertions", async({page})=>{
//     await page.goto("https://www.saucedemo.com/")
//     await expect(page).toHaveURL("https://www.saucedemo.com/")
//     await expect(page.getByTestId("username")).toBeAttached();
//     await expect(page.getByTestId("username")).toBeVisible();
//     // await expect(page.getByTestId("user")).toBeVisible(); //?Error
//     // await expect(page).toHaveTitle("Hi amazon") //?Error
//     await expect(page).toHaveTitle("Swag Labs")
//     const Response=await page.request.get("https://www.saucedemo.com/")
//     await expect(Response).toBeOK();

//     // await page.screenshot({path:"./screenshots/saucedemo.png"})


//     await expect(page).toHaveScreenshot()

    

// })



// import { test, expect } from "@playwright/test";

// test("amazon text assertion", async ({ page }) => {

//   await page.goto("https://www.amazon.in/");

//   await page.locator("#twotabsearchtextbox").fill("iphone");
//   await page.keyboard.press("Enter");

//   const product = page.locator("div[data-component-type='s-search-result']").first();

// //? Assert that the product title contains "iPhone"
//   await expect(product).toContainText("iPhone");
// //? tocontainclass is used to check whether the element contains the specified class or not.
//     await expect(product).toContainClass("s-result-item");

    

// });


import {expect, test} from "@playwright/test";
test.use({actionTimeout:2000})

// test("assertions", async({page})=>{
//     await page.goto("https://www.saucedemo.com/")
//     await expect(page).toHaveURL("https://www.saucedemo.com/")
//     await expect.soft(page.getByLabel("username")).toBeHidden();
// })


//? optional property mein hi timeout ka use kar sakte hai. agar element exist nahi karta hai to timeout ke baad error throw karega.
test("web elements", async ({page}) => {
    await page.goto("https://www.amazon.com/")
    await page.locator("//input[@id='twotabsearchtextbo']").fill("shoes",{timeout:1000});
    await page.locator("//input[@id='nav-search-submit-button']").click();

    await page.locator("//span[@class='a-price-whole']").waitFor();

    let ele=await page.locator("//span[@class='a-price-whole']").all()

    console.log(ele);
})

