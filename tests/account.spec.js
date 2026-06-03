const { test, expect } = require('@playwright/test');
const {loginPage} = require('../pages/login.page');
const {DashboardPage} = require('../pages/dashboard.page');
const {AccountOverviewPage} = require('../pages/account.page');

test('Account Overview and Details', async ({ page, context }) => {
    await context.tracing.start({ screenshots: true, snapshots: true });
    const overviewPage = new AccountOverviewPage(page);
    await overviewPage.launchPage();
    await overviewPage.loginPage();
    await overviewPage.verifyAccountOverview();
    await overviewPage.logout();
    await context.tracing.stop({ path: 'traces/account-overview.zip' });

});