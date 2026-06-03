class UpdateProfile{
    
    constructor(page){
    this.page = page;
    this.updateProfileLink = page.locator('a[href="updateprofile.htm"]', { hasText: 'Update Contact Info' });
    this.updateProfileHeader = page.locator('.title', { hasText: 'Update Profile' });
    this.updateFirstNameInput = page.locator('#customer\\.firstName');
    this.updateLastNameInput = page.locator('#customer\\.lastName');
    this.updateAddressInput = page.locator('#customer\\.address\\.street');
    this.updateCityInput = page.locator('#customer\\.address\\.city');
    this.updateStateInput = page.locator('#customer\\.address\\.state');
    this.updateZipCodeInput = page.locator('#customer\\.address\\.zipCode');
    this.updatePhoneNumberInput = page.locator('#customer\\.phoneNumber');
    this.updateProfileButton = page.locator('button:has-text("Update Profile"), input[type="submit"][value="Update Profile"], .button:has-text("Update Profile")');
    this.updateSuccessMessage = page.locator('#updateProfileResult > h1[class="title"]', { hasText: 'Profile Updated'});
    
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

    async clickUpdateProfileLink(profileData) {
        const updatedData = profileData || require('../utils/testData.js').revisedData;
        await this.updateProfileLink.click();
        await this.updateProfileHeader.waitFor({ state: 'visible' });
        await this.updateFirstNameInput.fill(updatedData.firstName);
        await this.updateLastNameInput.fill(updatedData.lastName);
        await this.updateAddressInput.fill(updatedData.address);
        await this.updateCityInput.fill(updatedData.city);
        await this.updateStateInput.fill(updatedData.state);
        await this.updateZipCodeInput.fill(updatedData.zip);
        await this.updatePhoneNumberInput.fill(updatedData.phone);
        await this.updateProfileButton.waitFor({ state: 'visible' });
        await this.updateProfileButton.click();
        await this.updateSuccessMessage.waitFor({ state: 'visible' });
    }
    async logout() {
        await this.page.goto('/');
    }
}
module.exports = { UpdateProfile };