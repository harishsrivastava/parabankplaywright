const { randomInt } = require('crypto');
module.exports = {
    
    newuser: {
        firstName: "Perf_1" + randomInt(1000, 9999),
        lastName: "Automation" + randomInt(1000, 9999),
        address: "Toronto Street",
        city: "Toronto",
        state: "ON",
        zip: "12345",
        phone: "1234567890",
        ssn: "1234",
        username: "ABC_1" + Date.now(),
        password: "password"
    },
    bill: {
        name: "Electricity",
        address: "Toronto",
        city: "Toronto",
        state: "ON",
        zip: "12345",
        phone: "1234567890",
        account: "12345",
        amount: "5"
    },
    user: {
        username: "ABC_11780508515740",
        password: "password"
    },
    revisedData: {
        firstName: "June_" + randomInt(1000, 9999),
        lastName: "June_" + randomInt(1000, 9999),
        address: "Delhi Street",
        city: "New Delhi",
        state: "ONTARIO",
        zip: "9999111119",
        phone: "9876787656"
    },
    loan: {
        Amount: "0.05",
        LoanDownPayment: "0.01"
    }
};
