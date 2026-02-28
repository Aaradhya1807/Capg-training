import {test} from "@playwright/test";

test("task2", async ({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator(" input#username").fill("student")
    await page.locator(" input#password").fill("Password123")
    await page.locator("button#submit").click()
    await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
})


test("task3", async ({page}) => {
    await page.goto("http://techbeamers.com/practice-test-login/")
    // await page.goto("http://techbeamers.com/practice-test-login/")
    await page.locator("input#username").fill("testuser")
    await page.locator("input#password").fill("password")
    await page.locator("button[type=submit]").click()
    // await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
})


test.only("task4", async ({page}) => {
    await page.goto("http://techbeamers.com/practice-test-login/")
    // await page.goto("http://techbeamers.com/practice-test-login/")
    await page.locator("//input[@id='username']").fill("testuser")
    await page.locator("//input[@id='password']").fill("password")
    await page.locator("//button[@type='submit']").click()
    // await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
})