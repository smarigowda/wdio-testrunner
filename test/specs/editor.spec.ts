import { Auth } from '../page-objects/Auth';
import { Editor } from '../page-objects/Editor';
import { users } from '../fixtures/users';

const auth = new Auth();
const editor = new Editor();

describe('Post Editor', () => {
    before(() => {
        // load login page
        // browser.url('/login');
        auth.load();
        // login with valid user credentials
        auth.login(users.user1);
    });
    beforeEach(() => {
        // load post editor page
        // browser.url('/editor');
        editor.load();
    })
    it('should load properly', () => {
        // assert the url is correct
        expect(browser).toHaveUrlContaining('editor');
        // assert the page fields are correct
        expect(editor.title).toBeExisting();
        expect(editor.description).toBeExisting();
        expect(editor.body).toBeExisting();
        expect(editor.tags).toBeExisting();
        expect(editor.publish).toBeExisting();
    });
});