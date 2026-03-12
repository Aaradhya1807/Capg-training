// import {test} from "@playwright/test"

// test("Frame",async({page})=>{
//     await page.goto("https://ui.vision/demo/webtest/frames/");
    // await page.locator("//input[@name='mytext1']").fill("aaradhya")


    //!no of frames
    // let frame=await page.frames();
    // console.log(frame.length);



    // //!page titles
    // console.log(frame);
    // for(let i of frame){
    //     console.log(i.title);
        
    // }


    //!A1
    // const frame1= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    // await frame1?.locator("//input[@name='mytext1']").fill("aaradhya")

    //!A2
    // let frame2=await page.frameLocator("//frame[@src='frame_2.html']")
    // await frame2.locator("//input[@name='mytext2']").fill("hehaww")


    // let frame3=page.frameLocator("//frame[@src='frame_3.html']").frameLocator("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
    // await frame3.locator("//label[@for='i6']/div/div").first().click()

// })

// test("Frame",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");

//     await page.locator("//button[@id='confirmBtn']").click()
//     await page.keyboard.press("Enter")

//     await page.locator("//button[@id='promptBtn']").click()

    
//     await page.keyboard.press("Enter")
//     await page.waitForTimeout(3000)









// })