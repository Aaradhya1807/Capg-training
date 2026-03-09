import { test } from "@playwright/test";

// test("task2", async ({page}) => {
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("phones");
//     await page.locator('//button[@class="XFwMiH"]').first().click();
//     let phone=page.locator("//div[@class='RG5Slk' and .='Google Pixel 9A (Porcelain, 256 GB)']/ancestor::div[@class='jIjQ8S']/descendant::div[@class='hZ3P6w DeU9vF']").textContent();
//     console.log(phone);
// })


//! Ek hi xpath se dono details nikalne ke liye | operator ka use karte hain

// test("task2", async ({page}) => {
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("phones");
//     await page.locator('//button[@class="XFwMiH"]').first().click();

//     let details = await page.locator("//div[@class='RG5Slk' and .='Google Pixel 9A (Porcelain, 256 GB)'] | //div[@class='RG5Slk' and .='Google Pixel 9A (Porcelain, 256 GB)']/ancestor::div[@class='jIjQ8S']/descendant::div[@class='hZ3P6w DeU9vF']").allTextContents();

//     console.log(details);
// })


//!GET by Methods
//!Label and Text

// test("get by methods", async ({page}) => {
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.getByLabel("Username", { exact: true }).fill("student"); 
//      //? exact: true use karne se sirf wahi element select hoga jiska label exactly "Username" hai,
//      //? agar is option ko use nahi karenge to wo us element ko bhi select kar lega jiska label "Username or Email" hai, kyunki usme bhi "Username" shamil hai.
//     await page.getByLabel("Password").fill("Password123");
//     await page.getByText("Submit").first().click();

// })

// //!ByRole
// test("get by methods", async ({page}) => {
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.getByRole("textbox", { name: "Username" }).fill("student");
//     await page.getByRole("textbox", { name: "Password" }).fill("Password123");
//     await page.getByRole("button", { name: "Submit" }).click();
// })

//!ByPlaceholder, Title, Alt Text, are used to locate elements based on their placeholder text, title attribute, or alternative text (alt attribute) respectively. 
//!These methods are particularly useful when other attributes like id or class are not available or reliable for locating elements.

//!ByTestId, is used to locate elements based on a custom data attribute called "data-testid". 
//!This method is often used in testing frameworks to provide a stable and unique identifier for elements, making it easier to locate them during automated testing.
test("get by methods", async ({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("student");
    await page.getByTestId("password").fill("Password123");
    await page.getByTestId("login-button").click();
})