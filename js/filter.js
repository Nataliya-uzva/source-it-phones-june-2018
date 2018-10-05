'use strict';

class Filter {
    constructor(options) {
        this._el = options.element;

        this._filter = this._el.querySelector('[data-element="filter"]');

        this._filter.addEventListener('input', (event) => {

            let phoneFilter = new CustomEvent('phoneFilter', {
                detail: event.target.value
            });
            this._el.dispatchEvent(phoneFilter);

        });
    }
    getElement() {
        return this._el;
    }
}