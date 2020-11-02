import { Auth } from '../page-objects/Auth';

const auth = new Auth();

describe('Login', () => {
    beforeEach(() => {
        // go to the login page
        browser.url('/login');
    })
    it('should let you login', () => {
        auth.login({ username: 'demo@learnwebdriverio.com', password: 'wdiodemo' });
        auth.logout();
    });
    it('should error with a missing username', () => {
        auth
          .login({ username: '', password: 'wdiodemo' })
          .expectEmailError()
    });
    it('should error with a missing password', () => {
        auth
          .login({ username: 'demo@learnwebdriverio.com', password: '' })
          .expectPasswordError();
    });
});