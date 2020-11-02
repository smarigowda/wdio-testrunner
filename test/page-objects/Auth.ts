export class Auth {
    emailSelector = 'input[type="email"]';
    passwordSelector = 'input[type="password"]';
    signInButtonSelector = 'button*=Sign in';
    errorMessageSelector = '.error-messages li';
    settingsSelector = 'a*=Settings'
    logoutButtonSelector = 'button*=logout';

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
    get logoutButton() {
        return $(this.logoutButtonSelector);
    }
    get settings() {
        return $(this.settingsSelector);
    }
    login({ username, password }: { username: string, password: string }): this {
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
        }, { interval: 100, timeoutMsg: 'login did not succeed, no error occurred' });

        return this;
    }

    logout() {
        this.settings.scrollIntoView();
        this.settings.click();
        this.logoutButton.scrollIntoView();
        this.logoutButton.click();
        expect(browser).toHaveUrl('https://demo.learnwebdriverio.com/');
    }

    expectEmailError() {
        expect(this.errorMessage).toBeExisting();
        expect($("li*=email can't be blank")).toBeExisting();
    }
    expectPasswordError() {
        expect(this.errorMessage).toBeExisting();
        expect($("li*=password can't be blank")).toBeExisting();
    }
}