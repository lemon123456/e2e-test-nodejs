const loginPage = require('../pages/LoginPage.js');

module.exports = function(){
    this.Given(/^I go to amazon home page$/, function () {
        return loginPage.open();
    });

    this.When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function(accountName, accountPassword) {
        loginPage.navigation.click();
        loginPage.login(accountName, accountPassword);
    });

    this.Then(/^I should see the account information$/, function() {
        loginPage.verifyButton.click();
    });
};


