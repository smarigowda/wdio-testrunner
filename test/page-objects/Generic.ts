import { URL } from 'url';

export class Generic {
    path: string;
    url: URL;
    constructor(path: string) {
        this.path = path;
        this.url = new URL(path, browser.config.baseUrl);
    }
    load() {
        browser.url(this.path);
    }
}