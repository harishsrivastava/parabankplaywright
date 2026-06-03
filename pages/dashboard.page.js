class DashboardPage {
    constructor(page) {
        this.page = page;
        this.accountOverviewPage = page.locator('#showOverview > h1', { hasText: 'Account overview' });
        this.accountLabel = this.page.locator('#accountTable th:nth-child(0)', { hasText: 'Account' });
        this.accountBalanceLabel = this.page.locator('#accountTable th:nth-child(1)', { hasText: 'Balance*' });
        this.accountAvailableAmountLabel = this.page.locator('#accountTable th:nth-child(2)', { hasText: 'Available Amount' });
    }

    async verifyAccountOverviewPage() {
        return await this.accountOverviewPage.isVisible();
    }

    async verifyaccountLabel() {
        return await this.accountLabel.isVisible();
    }

    async verifyaccountBalanceLabel() {
        return await this.accountBalanceLabel.isVisible();
    }

    async verifyaccountAvailableAmountLabel() {
        return await this.accountAvailableAmountLabel.isVisible();
    }
}

module.exports = { DashboardPage };