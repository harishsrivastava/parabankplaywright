class BillPayPage {

    constructor(page) {
        this.page = page;
        this.BillPayPageLink = page.locator('a[href="billpay.htm"]', { hasText: 'Bill Pay' });
        this.billPayHeader = page.locator('.title', { hasText: 'Bill Payment Service' });
        this.payeeNameInput = page.locator('[name="payee.name"]');
        this.payeeAddressInput = page.locator('[name="payee.address.street"]');
        this.payeeCityInput = page.locator('[name="payee.address.city"]');
        this.payeeStateInput = page.locator('[name="payee.address.state"]');
        this.payeeZipCodeInput = page.locator('[name="payee.address.zipCode"]');
        this.payeePhoneNumberInput = page.locator('[name="payee.phoneNumber"]');
        this.payeeAccountNumberInput = page.locator('[name="payee.accountNumber"]');
        this.verifyAccountNumberInput = page.locator('[name="verifyAccount"]');
        this.amountInput = page.locator('[name="amount"]');
        this.fromAccountSelect = page.locator('[name="fromAccountId"]');
        this.sendPaymentButton = page.locator('button:has-text("Send Payment"), input[type="submit"][value="Send Payment"], .button:has-text("Send Payment")');
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


    async verifyBillPayPage(BillingData) {
        const billData = BillingData || require('../utils/testData.js').bill;
        const newPagePromise = this.page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null);
        await this.BillPayPageLink.click();
        const newPage = await newPagePromise;
        if (newPage) {
            await newPage.waitForLoadState('domcontentloaded');
            this.setPage(newPage);
        } else {
            await this.page.waitForLoadState('domcontentloaded');
        }
        await this.billPayHeader.waitFor({ state: 'visible' });
        await this.payeeNameInput.fill(billData.name);
        await this.payeeAddressInput.fill(billData.address);
        await this.payeeCityInput.fill(billData.city);
        await this.payeeStateInput.fill(billData.state);
        await this.payeeZipCodeInput.fill(billData.zip);
        await this.payeePhoneNumberInput.fill(billData.phone);
        await this.payeeAccountNumberInput.fill(billData.account);
        await this.verifyAccountNumberInput.fill(billData.account);
        await this.amountInput.fill(billData.amount);
       
        if (await this.fromAccountSelect.isVisible()) {
            await this.fromAccountSelect.selectOption({ index: 0 });
        }
        await this.sendPaymentButton.click();
    }

    async logout() {
        await this.page.goto('/');
    }
}
module.exports = { BillPayPage };   