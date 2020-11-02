export class Editor {
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
    load() {
        browser.url('/editor');
        expect(browser).toHaveUrlContaining('editor');
    }
}