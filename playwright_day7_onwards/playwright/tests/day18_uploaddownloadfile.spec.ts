import {test} from "@playwright/test"
import path from "path"

test("uplaod files", async ({page})=>{

    // console.log(__dirname);
    // console.log(__filename);



    //!Single file upload
    // await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/aarad/OneDrive/Desktop/Testing class caapg/playwright_day7_onwards/playwright/tests/uploadfile/demo.txt")
    // await page.getByRole('button', {name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)

    //!multiple files upload
    // await page.goto("https://testautomationpractice.blogspot.com/")
    // let files:string[]=["C:/Users/aarad/OneDrive/Desktop/Testing class caapg/playwright_day7_onwards/playwright/tests/uploadfile/demo.txt", "C:/Users/aarad/OneDrive/Desktop/Testing class caapg/playwright_day7_onwards/playwright/tests/uploadfile/demo.xls", "C:/Users/aarad/OneDrive/Desktop/PCGBM/SQL_CODES.csv"]
    // await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(files)
    // await page.getByRole('button', {name:"Upload Multiple File"}).click()
    // await page.waitForTimeout(3000)
    


    //!case 2
    // await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,"/uploadfile/demo.txt"))
    // await page.getByRole('button', {name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)



    
    
})