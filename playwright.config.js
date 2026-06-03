const config = {
    use: {
        baseURL: 'https://parabank.parasoft.com/',
        headless: true,
        screenshot: 'on',
        video: 'on',
        launchOptions: { slowMo: 50 }
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]]
};

module.exports = config;  