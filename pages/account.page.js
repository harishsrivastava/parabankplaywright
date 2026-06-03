class AccountOverviewPage {

    constructor(page) {
        this.page = page;
        this.AccountOverViewLink = page.locator('a[href="overview.htm"]', { hasText: 'Accounts Overview' });
        this.ListAccounts = page.locator('a[href*="activity.htm?id="]');
        this.AccountDetailsHeader = page.locator('.title', { hasText: 'Account Details' });
        this.AccountActivitiesHeader = page.locator('.title', { hasText: 'Account Activity' });
        this.GoButton = page.locator('.button[value="Go"]');
        
        // FIX: Use regex to match either "Received" OR "Sent" inside a single hasText constraint
        this.TransactionsTable = page.locator('a[href*="transaction.htm?id"]', { 
            hasText: /Funds Transfer (Received|Sent)/ 
        });

        // Target either a table cell or message containing the text string safely
        this.noTransactionTable = page.locator('td, p', { hasText: 'No transactions found' });
        this.TransactionsDetailsHeader = page.locator('.title', { hasText: 'Transaction Details' });
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

    async verifyAccountOverview() {
        await this.AccountOverViewLink.click();
        await this.ListAccounts.first().click();
        await this.GoButton.click();

        // FIX: Check if at least 1 matching transaction exists to prevent Strict Mode crashes
        const transactionCount = await this.TransactionsTable.count();

        if (transactionCount > 0) {
            console.log(`${transactionCount} transactions found for this account`);
            // FIX: Safely target the first one inside the array collection block
            await this.TransactionsTable.first().click();
        } else if (await this.noTransactionTable.isVisible()) {
            // FIX: Corrected Console.log to lower-case console.log
            console.log('No transactions found for this account');
            return; // Gracefully exit the method flow run layout execution loop
        }
    }

    async logout() {
        await this.page.goto('/');
    }
}

module.exports = { AccountOverviewPage };
