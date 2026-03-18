import { test } from "@playwright/test";
import { log } from "node:console";

test("Print full match details", async ({ page }) => {
  await page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent");

  const elements = page.locator(
    '//p[@class="match-count" and .="Final"] | //a[@href="/matchcentre/6776-scorecard"] | //p[@class="match-place" and .="Thyagaraj Indoor Stadium, Delhi"]'
  );

  const count = await elements.count();
  console.log(count);
  

  for (let i = 0; i < count; i++) {
    const text=(await elements.nth(i).innerText());
    console.log(text);
    


    if(text.includes("Stadium")){
        break;
    }
  }
});