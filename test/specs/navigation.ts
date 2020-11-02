describe('Navigation Test Suite', function() {
    it('should load properly', function() {
        browser.url('/');
        if( browser.getTitle() !== 'Conduit' ) {
            throw new Error('Title of the home page should be Conduit');
        }
        $('=Sign in').click();
        const expectedLoginUrl = 'https://demo.learnwebdriverio.com/login';
        const actualLoginUrl = browser.getUrl();
        if(actualLoginUrl !== expectedLoginUrl) {
            throw new Error(`URL of login page is not correct, expected url to be ${expectedLoginUrl}, actual url = ${actualLoginUrl}`);
        }
    });
})