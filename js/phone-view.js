'use strict';

class PhoneView {
    constructor(options) {
        this._el = options.element;
    }

    getElement() {
        return this._el;
    }
}