import { Auth } from '../page-objects/Auth';

const auth = new Auth();

const emailSelector = 'input[type="email"]';
const passwordSelector = 'input[type="password"]';
const signInButtonSelector = 'button*=Sign in';

function login({ username, password }) {
    // enter valid user name in email input
    auth.email.setValue(username);
    // enter valid password in the password input
    auth.password.setValue(password);
    // click on sign-in button
    auth.signIn.click();
}


describe('Login', () => {
    beforeEach(() => {
        // go to the login page
        browser.url('/login');
    })
    it.only('should let you login', () => {
        login({ username: 'demo@learnwebdriverio.com', password: 'wdiodemo' });

        // assert that we are logged in
        $('=Settings').waitForExist();
        $('=Settings').waitForDisplayed();
    
        expect($('.error-messages li')).not.toBeExisting();
        expect(browser).not.toHaveUrlContaining('login');
        // logout
        $('=Settings').scrollIntoView();
        $('=Settings').click();
        $('button*=logout').waitForExist();
        $('button*=logout').scrollIntoView();
        $('button*=logout').click();
        expect(browser).toHaveUrl('https://demo.learnwebdriverio.com/');
    });
    it('should error with a missing username', () => {
        login({ username: '', password: 'wdiodemo' });
        expect($('.error-messages li')).toBeExisting();
        expect($("li*=email can't be blank")).toBeExisting();
    });
    it('should error with a missing password', () => {
        login({ username: 'demo@learnwebdriverio.com', password: '' });
        expect($('.error-messages li')).toBeExisting();
        expect($("li*=password can't be blank")).toBeExisting();
    });
});