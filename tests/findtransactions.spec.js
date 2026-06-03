const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');
const {DashboardPage} = require('../pages/dashboard.page');
const {FindTransactionsPage} = require('../pages/findTransactions.page');

test('Find Transactions', async ({page, context}) => {
    const findTransactions = new FindTransactionsPage(page);
    await context.tracing.start({ screenshots: true, snapshots: true });
    await findTransactions.launchPage();
    await findTransactions.loginPage();
    await findTransactions.verifyFindTransactionsPage();
    await findTransactions.logout();
    await context.tracing.stop({ path: 'traces/find-transactions.zip' });
});