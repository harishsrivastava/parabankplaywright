const {test, expect} = require('@playwright/test');

// Importing page objects
const {RegisterPage} = require('../pages/register.page');

const registData = require('../utils/testData.js');
const fs = require('fs');
const path = require('path');

test('New user registration', async ({page, context}) => {
    await context.tracing.start({ screenshots: true, snapshots: true });
    const newRegistration = new RegisterPage(page);
    await newRegistration.registernewuser(registData.newuser);

// Save the created user data for future use
    const resultsDir = path.join(__dirname, '..', 'utils');
    if (!fs.existsSync(resultsDir)) {
        fs.mkdirSync(resultsDir, { recursive: true });
    }
    const resultsFile = path.join(resultsDir, 'createdUsers.js');
    fs.writeFileSync(resultsFile, `module.exports = ${JSON.stringify(registData.newuser, null, 2)};`, 'utf-8');
    
    await newRegistration.logout();

    await context.tracing.stop({ path: 'traces/register-user.zip' });

});