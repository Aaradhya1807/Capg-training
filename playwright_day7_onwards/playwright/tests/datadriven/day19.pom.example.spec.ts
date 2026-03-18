import test from "@playwright/test";
import path from "node:path";
import fs from "fs";
import Example from "./day19_example.page";
import sample from "./day19_example.page";

let dataFile = fs.readFileSync(path.join(__dirname,"../../testdata/data.json"),"utf-8")
let data = JSON.parse(dataFile);

test("POM Example with Json",async({page})=>{
    let examplePage=new Example(page);
    
    for(let i of data){
        await page.goto(i.url);
        await examplePage.usernameTF.fill(i.Username);
        await examplePage.passwordTF.fill(i.Password);
        await examplePage.submitBtn.click();
    }
})



test.only("fun-in-pom", async ({page})=>{
    let sample_page=new sample(page)
    await sample_page.performLogin(
        'https://practicetestautomation.com/practice-test-login/',
        "student", "Password123")
})