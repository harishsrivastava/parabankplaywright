const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');
const {RequestLoan} = require('../pages/loan.page');

test('Apply for Loan', async ({page, context}) => {

    const ldata = require('../utils/testData.js');
    await context.tracing.start({ screenshots: true, snapshots: true });
    const loan = new RequestLoan(page);
    await loan.launchPage();
    await loan.loginPage();
    await loan.ApplyLoan(ldata.loan);
    await loan.logout();
    await context.tracing.stop({ path: 'traces/request-loan.zip' });
});