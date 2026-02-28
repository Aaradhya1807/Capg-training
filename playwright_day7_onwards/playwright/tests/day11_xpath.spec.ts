
import {test} from "@playwright/test";

test("task1", async ({page}) => {
    await page.goto("https://www.amazon.in/")
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("samsung phones")
    await page.locator("//input[@id='nav-search-submit-button']").click()
    // await page.locator("//img[@class='s-image' and @src='https://m.media-amazon.com/images/I/71ju4kS-W8L._AC_UY218_.jpg']").click()   
    let price=await page.locator("//span[@class='a-price-whole']").nth(4).innerText()
    console.log(price)

})