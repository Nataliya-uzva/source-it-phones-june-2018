'use strict';

class Page {
    constructor(options) {
        this._el = options.element;
    }
}

new Page({
    element: document.querySelector('[data-component="page-phone-catalogue"]')
});