const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');
const {DashboardPage} = require('../pages/dashboard.page');
const {TransferFundsPage} = require('../pages/fundtransfer.page');

test('Transfer Funds between accounts', async ({page, context}) => {
    const transferFundsPage = new TransferFundsPage(page);
    await context.tracing.start({ screenshots: true, snapshots: true });
    await transferFundsPage.launchPage();
    await transferFundsPage.loginPage();
    await transferFundsPage.homePage();
    await transferFundsPage.verifyTransferFundsPage();
    await transferFundsPage.transferFunds();
    await transferFundsPage.logout();
    await context.tracing.stop({ path: 'traces/transfer-funds.zip' });
});