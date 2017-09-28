const purchasePage = require('../pages/purchase.js');

module.exports = function(){
    this.Given(/^I go to amazon home page$/, function () {
        return purchasePage.open();
    });

    this.When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function(accountName, accountPassword) {
        purchasePage.navigation.click();
        purchasePage.login(accountName, accountPassword);
        // purchasePage.username.setValue(accountName);
        // purchasePage.password.setValue(accountPassword);
        // purchasePage.signButton.click();
    });

    this.Then(/^I should see the account information$/, function() {
        purchasePage.verifyButton.click();
    });
};


