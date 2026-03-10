// import { test, expect } from "@playwright/test";

// test("amazon text assertion", async ({ page }) => {

//   await page.goto("https://www.flipkart.com/");
// //   await page.getByTestId("nav_avod_desktop_topnav").click();
//   await page.getByTestId("nav_cs_4").click();
// })
    // await page.locator("//a[@href='/minitv?ref_=nav_avod_desktop_topnav']").waitFor({timeout:20000, state:"detached"});
    // await page.locator("//a[@href='/minitv?ref_=nav_avod_desktop_topnav']").click()

    // await page.locator("//img[@src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg']").waitFor({timeout:20000, state:"detached"});
    // await page.waitForSelector("//img[@src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg']");
    // await page.locator("//img[@src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg']").click();





// })

import { test } from "@playwright/test"

// test("3rd_phone_price", async ({ browser }) => {
//     let context=await browser.newContext()
//     let page=await context.newPage()

//     await page.goto("https://www.flipkart.com")

//     await page.locator('(//span[@class="b3wTlE"])[1]').click()

//     await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("shoes")

//     await page.locator('(//button[@class="XFwMiH"])[1]').click()

//     await Promise.all([
//         page.waitForNavigation(),
//         page.locator('//img[@class="MZeksS"]').first().click()
//     ]);

    // let [page2]=await Promise.all([
    //     context.waitForEvent("page"),
    //     page.locator('//img[@class="MZeksS"]').first().click()
    // ]);

    // let price = await page.locator('//div[@class="Nx9bqj CxhGGd"]').textContent()

    // console.log(`Price is: ${price}`)

    // console.log(await page.url());
    // console.log(await page2.url);
    

    // await page.screenshot({ path: `Screenshots/phones2.png` })

//!click methods
    test("click_method", async ({ page }) => {

        // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")

        // await page.locator("#btn").click({button:"right",
        //     clickCount:2
        // })

//!hover method

        // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")

        // await page.locator("#btn").hover()

//! click without click(), by usingh down and up
        // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")

        // await page.locator("#btn").hover()
        // await page.mouse.down()
        // await page.mouse.up()


//!scenerio

        // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")

        // await page.locator("//div[@id='circle']").hover()
        // await page.mouse.down()
        // await page.waitForTimeout(5000)
        // await page.mouse.up()


//!scene2


        // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")

        // await page.getByText("Mobile Charger").hover()
        // await page.mouse.down()
        // await page.locator("//div[@class='drop-column  min-h-[200px] bg-slate-100']").hover()
        // // await page.waitForTimeout(5000)
        // await page.mouse.up()


//!dragTo

        // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")

        // await page.getByText("Mobile Charger").dragTo(page.getByText("Mobile Accessories"))
        // await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"))
        // await page.getByText("Mobile Cover").dragTo(page.getByText("Mobile Accessories"))
        // await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"))


//!scrollIntoView

        // await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")

        // await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded()
        // await page.locator("//input[@type='checkbox']").click()






await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

await page.getByLabel("Name").type("Aaradhya");

await page.keyboard.press("Tab");

await page.getByLabel("Email Id").fill("abc@gmail.com");

await page.keyboard.press("Control+A");
await page.keyboard.press("Control+C");

await page.keyboard.press("Tab");

await page.keyboard.press("Control+V");

})


