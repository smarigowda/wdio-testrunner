import { Auth } from '../page-objects/Auth';

import { users } from '../fixtures/users';

const auth = new Auth();

describe('Login', () => {
    beforeEach(() => {
        // go to the login page
        // browser.url('/login');
        auth.load();
    })
    it('should let you login', () => {
        auth.login(users.user1);
        auth.logout();
    });
    it('should error with a missing username', () => {
        auth
          .login({ username: '', password: 'wdiodemo' })
          .expectEmailError()
    });
    it('should error with a missing password', () => {
        auth
          .login({ username: users.user1.username, password: '' })
          .expectPasswordError();
    });
});