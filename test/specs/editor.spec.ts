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
        const article = {
            title: 'Test Title',
            description: 'Test Description',
            body: 'Test Body',
            tags: ['automation', 'wdio']
        }
        editor.submitArticle(article);
    });
});