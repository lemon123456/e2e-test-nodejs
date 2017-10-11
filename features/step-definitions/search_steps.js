const searchPage = require('../pages/SearchPage.js');

module.exports = function(){
    this.Given(/^I am on the search page$/, function () {
        return searchPage.open();
    });

    this.When(/^I enter "([^"]*)" into the search box$/, function(keyword) {
        searchPage.searchInput.setValue(keyword);
    });

    this.Then(/^I click the search button$/, function() {
        searchPage.searchButton.click();
        console.log(searchPage.resultsList.getValue());
        expect(searchPage.resultsList.getValue()).to.equal('webdriverIO');
    });
};
