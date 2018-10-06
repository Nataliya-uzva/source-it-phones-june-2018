'use strict';

class Filter extends BaseComponent {
    constructor(options) {
        super(options);

        const filterElement = this._el.querySelector('[data-element="filter"]');

        filterElement.addEventListener('input', (event) => {

            let phoneFilter = new CustomEvent('phoneFilter', {
                detail: event.target.value
            });

            this._el.dispatchEvent(phoneFilter);

        });
    }

}