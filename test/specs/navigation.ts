describe('Navigation Test Suite', () => {
    it('should load properly', () => {
        browser.url('/');
        console.log(browser.getTitle());
    });
})