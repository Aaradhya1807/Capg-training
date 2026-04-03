//!beforeAll
// import {test} from "@playwright/test"

// test.beforeAll("1st", async()=>{
//     console.log("before all");
    
// })

// test("2nd", async()=>{

//     console.log("t1");
    
// })

// test("3rd", async()=>{

//     console.log("t2");
    
// })

//!beforeEach
// import {test} from "@playwright/test"

// test.beforeEach("1st", async()=>{
//     console.log("before each");
    
// })

// test("2nd", async()=>{

//     console.log("t1");
    
// })

// test("3rd", async()=>{

//     console.log("t2");
    
// })


//!afterAll
// import {test} from "@playwright/test"

// test.afterAll("1st", async()=>{
//     console.log("after all");
    
// })

// test("2nd", async()=>{

//     console.log("t1");
    
// })

// test("3rd", async()=>{

//     console.log("t2");
    
// })



//!afterEach
// import {test} from "@playwright/test"

// test.afterEach("1st", async()=>{
//     console.log("after each");
    
// })

// test("2nd", async()=>{

//     console.log("t1");
    
// })

// test("3rd", async()=>{

//     console.log("t2");
    
// })




// import { test, expect } from "@playwright/test";

// test("Amazon product open without Promise.all", async ({ page, context }) => {

//     await page.goto("https://www.amazon.in/")
//     await page.fill("#twotabsearchtextbox", "laptop")
//     await page.press("#twotabsearchtextbox", "Enter")
//     const newPagePromise = context.waitForEvent("page")
//     await page.locator("div[data-component-type='s-search-result'] h2 a").first().click()
//     const newPage = await newPagePromise
//     await newPage.waitForLoadState()
//     await expect(newPage).toHaveTitle(/Amazon/)

// })