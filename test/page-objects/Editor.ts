import { Generic } from '../page-objects/Generic';

interface submitArticle {
    title: string,
    description: string,
    body: string,
    tags: string[]
}
export class Editor extends Generic {
    constructor() {
        super('/editor');
    }
    selectors  = {
        title: '[data-qa-id="editor-title"]',
        description: '[data-qa-id="editor-description"]',
        body: '[data-qa-id="editor-body"] textarea',
        tags: '[data-qa-id="editor-tags"]',
        publish: '[data-qa-id="editor-publish"]',
        deleteArticle: 'button*=Delete Article'
    }
    get title() {
        return $(this.selectors.title);
    }
    get description() {
        return $(this.selectors.description);
    }
    get body() {
        return $(this.selectors.body);
    }
    get tags() {
        return $(this.selectors.tags);
    }
    get publish() {
        return $(this.selectors.publish);
    }
    get deleteArticle() {
        return $(this.selectors.deleteArticle);
    }
    shouldLoadProperly() {
        expect(browser).toHaveUrl(this.url.href);
        // assert the page fields are correct
        expect(this.title).toBeExisting();
        expect(this.description).toBeExisting();
        expect(this.body).toBeExisting();
        expect(this.tags).toBeExisting();
        expect(this.publish).toBeExisting();
    }
    submitArticle({
        title,
        description,
        body,
        tags,
    }: submitArticle) {
        this.title.setValue(title);
        this.description.setValue(description);
        this.body.setValue(body);
        tags.forEach(tag => {
            this.tags.setValue(tag);
            browser.keys('Enter');
        });
        this.publish.click();
        // expect(browser).toHaveUrlContaining(`articles/${title}`);
        this.deleteArticle.click();
        console.log('break here...');
    }
}