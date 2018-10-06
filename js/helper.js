'use strict';

const CLASS_HIDDEN = 'js-hidden';

class BaseComponent {
    constructor(options) {
        this._el = options.element;
    }

    getElement() {
        return this._el;
    }

    hide() {
        this._el.classList.add(CLASS_HIDDEN);
    }

    show() {
        this._el.classList.remove(CLASS_HIDDEN);
    }
}