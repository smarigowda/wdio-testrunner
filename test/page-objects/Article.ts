export class Article {
  selectors = {
    container: '[data-qa-id="article-page"]',
    title: '[data-qa-id="article-title"]',
    body: '[data-qa-id="article-body"]',
    tags: '[data-qa-id="article-tags"]',
    edit: '[data-qa-id="article-edit"]',
    delete: '[data-qa-id="article-delete"]',
  };
  get container() {
    return $(this.selectors.container);
  }
  get title() {
    return $(this.selectors.title);
  }
  get body() {
    return $(this.selectors.body);
  }
  get tags() {
    return $(this.selectors.tags);
  }
  get edit() {
    return $(this.selectors.edit);
  }
  get delete() {
    return $(this.selectors.delete);
  }
}
