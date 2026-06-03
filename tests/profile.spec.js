const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');
const {DashboardPage} = require('../pages/dashboard.page');
const {UpdateProfile} = require('../pages/updateProfile.page');

const profileUser = require('../utils/testData.js');

test('Update user profile information', async ({page, context}) => {
    await context.tracing.start({ screenshots: true, snapshots: true });
    const ProfilePage = new UpdateProfile(page);
    await ProfilePage.launchPage();
    await ProfilePage.loginPage();
    await ProfilePage.clickUpdateProfileLink(profileUser.revisedData);
    await expect(ProfilePage.updateSuccessMessage).toBeVisible();
    await ProfilePage.logout();
    await context.tracing.stop({ path: 'traces/update-profile.zip' });
});