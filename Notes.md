First Step is to initialize the node : npm init -y
Install playwright 
    npm install -D @playwright/test
    npx playwright install
    Verify Installed playwright.

 Create three dir - tests, pages, util.
    mkdir tests pages utils   

 in Pages folder
    - Add all the js pages (registration, login, etc.)
 in tests folder
    - Add all the tests to be executed js.
 in util folder
    - add testData.js

 Create a file playwright.config.js and update with config.
        const config = {
            use: {
                baseURL: 'https://parabank.parasoft.com/',
                headless: false
            }
        };

    module.exports = config;              


Execute the test using : npx playwright test tests/register.spec.js --report=html
To view the report
npx playwright show-report    