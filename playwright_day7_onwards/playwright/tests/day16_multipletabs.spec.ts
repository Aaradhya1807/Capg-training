import { test } from "@playwright/test";

// test("", async({browser})=>{

//     let context=await browser.newContext()
//     let page=await browser.newPage()
//     await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")

//     let page2=await context.newPage();
//     await page2.goto("https://www.flipkart.com/")
// })








    // let context = await browser.newContext();
    // let page = await context.newPage();
    // await page.goto("https://www.flipkart.com/")
    // await page.locator("//span[@class='b3wTlE']").click();
    // await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("shoes");
    // await page.locator('//button[@class="XFwMiH"]').first().click();
    // let [page2]=await Promise.all([page.waitForEvent("popup"),
    // page.locator("//img[@class='MZeksS']").first().click()])

    // console.log(page);
    // console.log(page2);
    





// test("task2",async({browser})=>{
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
 
//     const [page2]=await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator("//h2[@class='text-lg font-semibold text-gray-800'][1]/../descendant::button").first().click()
//     ])
//      await page2.waitForLoadState();
//     const text= await page2.locator("//h1[@class='text-3xl font-bold mb-2']").textContent()
//     console.log("Text is: ",text);
    
// })
// test("task3",async({browser})=>{
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")
 
//     const [page2]=await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator("//h2[@class='text-lg font-semibold text-gray-800'][1]/../descendant::button").first().click()
//     ])
//      await page2.waitForLoadState();
//     const text= await page2.locator("//h1[@class='text-3xl font-bold mb-2']").textContent()
//     console.log("Text is: ",text);






    test.only("task4",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("Dadda")
    await page.getByPlaceholder("Filename").fill("profile.txt")
    const [page2]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
})