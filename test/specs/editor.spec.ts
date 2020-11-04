import { Auth } from '../page-objects/Auth';
import { Editor } from '../page-objects/Editor';
import { users } from '../fixtures/users';

const auth = new Auth();
const editor = new Editor();

describe('Post Editor', () => {
    before(() => {
        auth.load();
        auth.login(users.user1);
    });
    beforeEach(() => {
        editor.load();
    })
    it('should load properly', () => {
        editor.shouldLoadProperly();
    });
    it('should let you publish a new post', () => {
        editor.title.setValue('Test Title');
        editor.description.setValue('Test Description');
        editor.body.setValue('Test body');
        editor.tags.setValue('test-automation');
        browser.keys('Enter');
        editor.publish.click();
        expect(browser).toHaveUrlContaining('articles/test-title');
        editor.deleteArticle.click();
        console.log('break here...');
    });
});