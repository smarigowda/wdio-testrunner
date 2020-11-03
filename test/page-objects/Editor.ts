import { Generic } from '../page-objects/Generic';

export class Editor extends Generic {
    constructor() {
        super('/editor');
    }
    selectors  = {
        title: '[data-qa-id="editor-title"]',
        description: '[data-qa-id="editor-description"]',
        body: '[data-qa-id="editor-body"]',
        tags: '[data-qa-id="editor-tags"]',
        publish: '[data-qa-id="editor-publish"]'
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
    shouldLoadProperly() {
        expect(browser).toHaveUrl(this.url.href);
        // assert the page fields are correct
        expect(this.title).toBeExisting();
        expect(this.description).toBeExisting();
        expect(this.body).toBeExisting();
        expect(this.tags).toBeExisting();
        expect(this.publish).toBeExisting();
    }
}