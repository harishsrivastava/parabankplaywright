const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');
const {Dashboard} = require('../pages/dashboard.page');
const data = require('../utils/testData.js');

test('Login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(data.user.username, data.user.password);
    await loginPage.logout();
    
});
