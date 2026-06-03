class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('.input[name="username"]');
        this.passwordInput = page.locator('.input[name="password"]');
        this.loginButton = page.locator(".button[type='submit']");
        this.logoutLink = page.locator('a[href="logout.htm"]');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}

module.exports = { LoginPage };
