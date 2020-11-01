describe('Navigation Test Suite', function() {
    it('should load properly', function() {
        browser.url('/');
        console.log(browser.getTitle());
        $('=Sign in').click();
        console.log(browser.getTitle());
    });
})