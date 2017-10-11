const Page = require('./Page');

const url = 'https://www.amazon.cn/';

class LoginPage {
    constructor() {
    }

    open() {
        return browser.url(url);
    }

    get navigation() {
        return browser.element('#nav-signin-tooltip > a > span');
    }

    get username() {
        return browser.elements('#ap_email');
    }

    get password() {
        return browser.element('#ap_password');
    }

    get signButton() {
        return browser.element('#signInSubmit');
    }

    get verifyButton() {
        return browser.element('#nav-link-yourAccount > span.nav-line-1');
    }

    login(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.signButton.click();
    }
}
module.exports = new LoginPage();

