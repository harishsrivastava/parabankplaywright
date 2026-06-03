const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');
const {BillPayPage} = require('../pages/billpay.page');

test('Bill Payment', async ({page, context}) => {
    const billData = require('../utils/testData.js');
    const billpayment = new BillPayPage(page);
    await context.tracing.start({ screenshots: true, snapshots: true });
    await billpayment.launchPage();
    await billpayment.loginPage();
    await billpayment.verifyBillPayPage(billData.bill);
    await billpayment.logout();
    await context.tracing.stop({ path: 'traces/bill-payment.zip' });

});