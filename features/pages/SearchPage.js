const Page = require('./Page');

const url = '/';

class SearchPage {
    constructor() {
    }

    open() {
        return browser.url(url);
    }

    get searchInput() {
        return browser.element('#lst-ib');
    }

    get searchButton() {
        return browser.element('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)');
    }

    get resultsList() {
        return browser.element('#lst-ib')
    }
}
module.exports = new SearchPage();