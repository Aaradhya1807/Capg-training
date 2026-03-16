import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

// test("write excel data", async({page})=>{

//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
//     let sheet=await book.getWorksheet("Sheet4")

//     if(!sheet){
//        sheet= await book.addWorksheet("Sheet4")
//     }

//     sheet.getRow(1).getCell(1).value="playwright"

//     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
// })






// test("write excel data from array", async({page})=>{

//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
//     let sheet=await book.getWorksheet("Sheet4")

//     if(!sheet){
//        sheet= await book.addWorksheet("Sheet4")
//     }

//     let data=["heelo", 5, "yehaw"]

//     for(let r=0; r<=data.length;r++){
//         sheet.getRow(1).getCell(r+1).value=data[r]

//     }

//     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
// })








test("write excel data from amazon", async({page})=>{

    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=await book.getWorksheet("Sheet6")

    if(!sheet){
       sheet= await book.addWorksheet("Sheet6")
    }

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("shoes")
    await page.waitForSelector("//div[@class='left-pane-results-container']/child::div")
    const data=await page.locator("//div[@class='left-pane-results-container']/child::div").allTextContents()
    console.log(data);
    
    for(let i=0;i<data.length;i++){
        sheet.getRow(1).getCell(i+1).value= data[i];

    }

    await book.xlsx.writeFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
})