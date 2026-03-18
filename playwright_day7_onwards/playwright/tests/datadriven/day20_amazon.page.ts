import { Page, Locator } from "@playwright/test"

class Amazon {

    page: Page
    SearchTF: Locator
    ramTf: Locator
    Quantity: Locator
    SearchBtn: Locator
    Mobile: Locator
    Addc: Locator
    NumberQuan: Locator

    constructor(page: Page) {
        this.page = page
        this.SearchTF = page.locator('#twotabsearchtextbox')
        this.SearchBtn = page.locator('#nav-search-submit-button')
        this.ramTf = page.getByText("10 GB & Above")
        this.Mobile = page.locator('//div[@class="puisg-col puisg-col-4-of-4 puisg-col-4-of-8 puisg-col-4-of-12 puisg-col-4-of-16 puisg-col-4-of-20 puisg-col-4-of-24 puis-list-col-left"]').nth(3)
        this.Quantity = page.locator('//span[@class="a-dropdown-label"]')
        this.Addc = page.locator('//input[@title="Add to Shopping Cart"]').last()
        this.NumberQuan = page.locator('//li[@class="a-dropdown-item a-declarative"]').nth(2)
    }

    async search(value: string){
        await this.SearchTF.fill(value)
    }

    async searchBtn(){
        await this.SearchBtn.click()
    }

    async ramSize(){
        await this.ramTf.click()
    }

    async Mob(){
        const [page2] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.Mobile.click()
        ])
    }

    async Selectquan(){
        await this.Quantity.click()
        await this.NumberQuan.click()
    }

    async addtocart(){
        await this.Addc.click()
    }
}

export default Amazon