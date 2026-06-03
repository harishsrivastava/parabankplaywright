class FindTransactionsPage {

    constructor(page) {
        this.page = page;
        this.FindTransactionsPage = page.locator('a[href="findtrans.htm"]', { hasText: 'Find Transactions' });
        this.FindTransactionsPageHeader = page.locator('.title', { hasText: 'Error!' });
    }

    async launchPage() {
        await this.page.goto('/');
    }
    async loginPage() {
        const { LoginPage } = require('./login.page');
        const data = require('../utils/testData.js');
        const loginPage = new LoginPage(this.page);
        await loginPage.navigate();
        await loginPage.login(data.user.username, data.user.password);
    }
 
    async verifyFindTransactionsPage() {
        await this.FindTransactionsPage.click();
        return await this.FindTransactionsPageHeader.isVisible();
    }

    async logout() {
        await this.page.goto('/');
    }
}
module.exports = { FindTransactionsPage };    