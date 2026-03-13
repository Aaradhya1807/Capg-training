import {test, expect} from "@playwright/test"

test("authentication", async({browser})=>{


    let context=await browser.newContext({httpCredentials:{username:"admin", password:"admin"}})
    let page=await context.newPage()
    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")

})



test.only("scenerio", async({browser})=>{

    let context=await browser.newContext({httpCredentials:{username:"admin", password:"admin"}})
    let page=await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    await expect(page.locator("//div[@class='example']/p")).toContainText("Congratulations! You must have the proper credentials.")


})