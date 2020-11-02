function login({ username, password }) {
    // enter valid user name in email input
    $('input[type="email"]').setValue(username);
    // enter valid password in the password input
    $('input[type="password"]').setValue(password);
    // click on sign-in button
    $('button*=Sign in').click();
}


describe('Login', () => {
    beforeEach(() => {
        // go to the login page
        browser.url('/login');
    })
    it('should let you login', () => {
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
})