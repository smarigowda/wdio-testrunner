import assert from 'assert';

describe('Navigation', function() {
    it('Website should load properly', function() {
        browser.url('/');
        // assert.strictEqual(browser.getTitle(), 'Conduit');
        expect(browser).toHaveTitle('Conduit');
        // if( browser.getTitle() !== 'Conduit' ) {
        //     throw new Error('Title of the home page should be Conduit');
        // }
        $('=Sign in').click();
        // const expectedLoginUrl = 'https://demo.learnwebdriverio.com/login';
        // const actualLoginUrl = browser.getUrl();
        // if(actualLoginUrl !== expectedLoginUrl) {
        //     throw new Error(`URL of login page is not correct, expected url to be ${expectedLoginUrl}, actual url = ${actualLoginUrl}`);
        // }
        // assert.strictEqual(browser.getUrl(), 'https://demo.learnwebdriverio.com/login');
        expect(browser).toHaveUrl('https://demo.learnwebdriverio.com/login');
    });
    it('Clicking on Logo should navigate to Home Page', () => {
        $('=Sign in').click();
        expect(browser).toHaveUrl('https://demo.learnwebdriverio.com/login');

        const logoSelector = '//a[contains(@class, "navbar-brand")]';
        $(logoSelector).click();
        expect(browser).toHaveUrl('https://demo.learnwebdriverio.com/');
        // browser.debug();
        console.log('end of test...');
    })
})