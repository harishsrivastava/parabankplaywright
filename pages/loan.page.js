class RequestLoan {

    constructor(page) {
        this.page = page;
        this.requestLoanLink = page.locator('a[href ="requestloan.htm"]');
        this.requestLoanHeader = page.locator('h1.title', { hasText: 'Apply for a Loan' });
        this.loanAmountInput = page.locator('#amount');
        this.downPaymentInput = page.locator('#downPayment');
        this.fromAccountSelect = page.locator('#fromAccountId');
        this.applyNowButton = page.locator('.button[value="Apply Now"]');
        this.loanRequestSuccessMessage = page.locator('#loanStatus', { hasText: 'Congratulations, your loan has been approved.' });
        this.logoutLink = page.locator('a[href="logout.htm"]');
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

    async ApplyLoan(loanData) {
        const loanAmount = loanData || require('../utils/testData.js').loan;
        await this.requestLoanLink.click();
        await this.loanAmountInput.fill(loanAmount.Amount);
        await this.downPaymentInput.fill(loanAmount.LoanDownPayment);
        const accountList = await this.fromAccountSelect.locator('option');
        const TotalAccounts = await accountList.count();
        const selectedAccount = Math.floor(Math.random() * TotalAccounts);
        await this.fromAccountSelect.selectOption({ index: selectedAccount });
        await this.applyNowButton.click();
    }

    async logout() {
        await this.logoutLink.click()
    }
    
}

module.exports = { RequestLoan };