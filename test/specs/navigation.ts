describe('Navigation Test Suite', function() {
    it('should load properly', function() {
        browser.url('/');
        if( browser.getTitle() !== 'Conduit' ) {
            throw new Error('Title of the home page should be Conduit');
        }
        $('=Sign in').click();
        console.log(browser.getUrl());
    });
})