import {test} from "@playwright/test"
import path from "path"

test("Downloads",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("Dadda")
    await page.getByPlaceholder("Filename").fill("profile.txt")
    const [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()

    ])
    console.log("download file:", downloadfile.suggestedFilename());
    
    let downloadlocation="C:/Users/aarad/OneDrive/Desktop/Testing class caapg/playwright_day7_onwards/playwright/downloads"
    let filename=await downloadfile.suggestedFilename()
    await downloadfile.saveAs(path.join(downloadlocation,filename))
})
