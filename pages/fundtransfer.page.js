class TransferFundsPage {

    constructor(page) {
        this.page = page;
        this.TransferFundsPage = page.locator('a[href="transfer.htm"]', { hasText: 'Transfer Funds' });
        this.TransferFundsPageHeader = page.locator('.title', { hasText: 'Transfer Funds' });
        this.TransferAmountInput = page.locator('#amount');
        this.FromAccountSelect = page.locator('#fromAccountId');
        this.ToAccountSelect = page.locator('#toAccountId');
        this.TransferButton = page.locator('.button[value="Transfer"]');
        this.TransferConfirmationMessage = page.locator('.title', { hasText: 'Transfer Complete!' })
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

    async homePage() {
        const { DashboardPage } = require('./dashboard.page');
        const dashboardPage = new DashboardPage(this.page);
        await dashboardPage.verifyAccountOverviewPage();
    }

    async verifyTransferFundsPage() {
        await this.TransferFundsPage.click();
        await this.TransferFundsPageHeader.isVisible();
    }
    
    async transferFunds() {
        await this.TransferAmountInput.fill('1.00');
        const fromAccountoptions = this.FromAccountSelect.locator('option');
        const FromtotalAccounts = await fromAccountoptions.count();
        const FromrandomIndex = Math.floor(Math.random() * FromtotalAccounts);
        await this.FromAccountSelect.selectOption({ index: FromrandomIndex });

        const ToAccountoptions = this.ToAccountSelect.locator('option');
        const TototalAccounts = await ToAccountoptions.count();
        const TorandomIndex = Math.floor(Math.random() * TototalAccounts);
        await this.ToAccountSelect.selectOption({ index: TorandomIndex });

        await this.TransferButton.click();
        return await this.TransferConfirmationMessage.isVisible();
    }

    async logout() {
        await this.page.goto('/');
    }
}
module.exports = { TransferFundsPage };