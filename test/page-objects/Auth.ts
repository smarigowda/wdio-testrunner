export class Auth {
    emailSelector = 'input[type="email"]';
    passwordSelector = 'input[type="password"]';
    signInButtonSelector = 'button*=Sign in';
    errorMessageSelector = '.error-messages li';
    settingsSelector = 'a*=Settings'

    constructor() {
    }
    get email() {
        return $(this.emailSelector);
    }
    get password() {
        return $(this.passwordSelector);
    }
    get signIn() {
        return $(this.signInButtonSelector);
    }
    get errorMessage() {
        return $(this.errorMessageSelector);
    }
    login({ username, password }) {
        this.email.setValue(username);
        this.password.setValue(password);
        this.signIn.click();
        // browser.debug();

        browser.waitUntil(() => {
            // wait for signin to be success
            const settingsExists = $(this.settingsSelector).isExisting();
            // or wait for error
            const errorExists = $(this.errorMessageSelector).isExisting();
            return settingsExists || errorExists;
        });
    }
}