export class Auth {
    emailSelector = 'input[type="email"]';
    passwordSelector = 'input[type="password"]';
    signInButtonSelector = 'button*=Sign in';
    errorMessageSelector = '.error-messages li';
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

}