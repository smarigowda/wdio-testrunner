describe('Login', () => {
    it('should let you login', () => {
        // go to the login page
        browser.url('/login');
        // enter valid user name in email input
        $('input[type="email"]').setValue('demo@learnwebdriverio.com');
        // enter valid password in the password input
        $('input[type="password"]').setValue('wdiodemo');
        // click on sign-in button
        $('button*=Sign in').click();
        // assert that we are logged in
        $('=Settings').waitForExist();
        $('=Settings').waitForDisplayed();
        $('=Settings').scrollIntoView();
        expect($('.error-messages li')).not.toBeExisting();
        expect(browser).not.toHaveUrlContaining('login');
        console.log('break here...');
    });
    // it('should error with a missing username', () => {
    //     console.log('test');
    // });
    // it('should error with a missing password', () => {
    //     console.log('test');
    // });
})