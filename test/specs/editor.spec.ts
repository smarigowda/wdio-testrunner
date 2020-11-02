import { Auth } from '../page-objects/Auth';
import { Editor } from '../page-objects/Editor';

const auth = new Auth();
const editor = new Editor();

describe('Post Editor', () => {
    before(() => {
        // load login page
        browser.url('/login');
        // login with valid user credentials
        auth.login({ username: 'demo@learnwebdriverio.com', password: 'wdiodemo' });
    });
    beforeEach(() => {
        // load post editor page
        browser.url('/editor');
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