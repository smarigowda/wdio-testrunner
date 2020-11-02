describe('page', () => {
    it('should have the right title', () => {
        browser.url('/');
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')
    });
    it('should be able to login using valid credentials', () => {
        // valid login code here...

    });
    it('shoud not be able to login using invalid credentials', () => {
        // invalid login code here...
    })
})