export class Generic {
    path: string;
    constructor(path: string) {
        this.path = path;
    }
    load() {
        browser.url(this.path);
    }
}