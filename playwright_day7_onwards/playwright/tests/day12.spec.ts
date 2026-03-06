
import {test} from "@playwright/test";

// test("task1", async ({page}) => {
//     await page.goto("https://www.amazon.in/")
//     page.locator("//img[contains(@data-a-hires,'https://m.media-amazon.com/images/I/513QTB9p4hL._AC_SY400_.jpg')]")
// })


//! Advanced methods to traverse
//?  //section[@id="desktop-banner"]/child::div/child::div/child::div/child::a/child::img
//?  descendant, preceding-sibling, following-sibling, parent, ancestor
//?descendant: It selects all the descendants of the current node, including children, grandchildren, etc.
//?preceding-sibling: It selects all the siblings that come before the current node.
//?following-sibling: It selects all the siblings that come after the current node.
//?parent: It selects the parent of the current node.
//?ancestor: It selects all the ancestors of the current node, including parents, grandparents, etc.

// test("task2", async ({page}) => {
//     await page.goto("https://www.amazon.in/")
//     page.locator("//span[@aria-hidden='true']/child::span[@class='a-price-whole' and .='549']")
// })

// test("task2", async ({page}) => {
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("phones");
//     await page.locator('//button[@class="XFwMiH"]').first().click();
//     let price=await page.locator("//div[@class='RG5Slk' and .='realme P4 Power 5G (TransSilver, 128 GB)']/ancestor::div[@class='jIjQ8S']/descendant::div[@class='hZ3P6w DeU9vF']").textContent();
//     console.log(price);
// })



test("task2", async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.locator("//li[@id='p_n_g-1003517064111/51258733031']/descendant::i[@class='a-icon a-icon-checkbox']").click();

    await page.screenshot({ path: "./screenshots/amazon2.png" });

})