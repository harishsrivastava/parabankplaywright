class RegisterPage {

    constructor(page) {
        this.page = page;
    //    this.registerLink = page.locator('a[href="register.htm"]', { hasText: 'Register' });
        this.registerLink = page.getByRole('link', { name: 'Register' });    
        this.RegisterPageHeader = page.locator('h1.title', { hasText: 'Signing up is easy!' });
        this.firstName = page.locator('#customer\\.firstName');
        this.lastName = page.locator('#customer\\.lastName');
        this.address = page.locator('#customer\\.address\\.street');
        this.city = page.locator('#customer\\.address\\.city');
        this.state = page.locator('#customer\\.address\\.state');
        this.zipCode = page.locator('#customer\\.address\\.zipCode');
        this.phoneNumber = page.locator('#customer\\.phoneNumber');
        this.ssn = page.locator('#customer\\.ssn');
        this.username = page.locator('#customer\\.username');
        this.password = page.locator('#customer\\.password');
        this.confirmPassword = page.locator('#repeatedPassword');
        this.registerButton = page.locator('input[type="submit"][value="Register"]');
        this.successMessage = page.locator('#rightPanel > p', { hasText: 'Your account was created successfully. You are now logged in.' });
        this.logoutLink = page.getByRole('link', { name: 'Log Out' });
    }

    async registernewuser(data) {
        await this.page.goto('/');
        await this.registerLink.click();
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.address.fill(data.address);
        await this.city.fill(data.city);
        await this.state.fill(data.state);
        await this.zipCode.fill(data.zip);
        await this.phoneNumber.fill(data.phone);
        await this.ssn.fill(data.ssn);
        await this.username.fill(data.username);
        await this.password.fill(data.password);
        await this.confirmPassword.fill(data.password);
        await this.registerButton.click();
        await this.successMessage.isVisible();

        // Return all registration data for reuse in other flows
        return {
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            phone: data.phone,
            ssn: data.ssn,
            username: data.username,
            password: data.password
        };
    }

    async logout() {
        await this.logoutLink.click();
    } 
}

module.exports = { RegisterPage };