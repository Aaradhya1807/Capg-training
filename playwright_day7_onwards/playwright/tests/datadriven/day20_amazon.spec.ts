import test from "@playwright/test";
import path from "node:path";
import fs from "fs";
import Amazon from "./day20_amazon.page";

let dataFile = fs.readFileSync(path.join(__dirname,"../../testdata/data2.json"),"utf-8")
let data = JSON.parse(dataFile);

test("Amazon",async({page})=>{
    let examplePage=new Amazon(page);

    // console.log(data.url);
    
    
        await page.goto(data.url);
        await examplePage.search(data.Search);

        await examplePage.searchBtn();
        await examplePage.ramSize();
        await examplePage.Mob();

        await examplePage.Selectquan()
        await examplePage.addtocart()

    }
)