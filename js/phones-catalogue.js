'use strict';

class PhonesCatalogue {
    constructor(options) {
        this._el = options.element;

        this._defaultPhones = options.phones;
        this._render(options.phones);
        
        this._el.addEventListener('click', (event) => {
            if (!event.target.closest('[data-element="phoneLink"]')) {
                return;
            }
            event.preventDefault();

            var linkClicked = new CustomEvent('phoneLinkClicked', {
                detail: 'phoneId'
            });

            this._el.dispatchEvent(linkClicked);
        })
    }

    getElement() {
        return this._el;
    }

    filterData(query) {
        const formQuery = query.toLocaleLowerCase();
        const filterPhones = this._defaultPhones
            .filter((phone) => {
                return phone.name.toLocaleLowerCase().includes(formQuery);
            })

        this._render(filterPhones);
    }
    _render(phones) {
      let template = '<ul class="phones">';

      phones.forEach((phone) => {
        template += `
        <li class="thumbnail">
            <a href="phones/${phone.id}" data-element="phoneLink" class="thumb">
                <img alt="${phone.name}" src="${phone.imageUrl}">
            </a>
            <a href="phones/${phone.id}" data-element="phoneLink">${phone.name}</a>
            <p>${phone.snippet}</p>
        </li>
        `
      });

      template += '</ul>';

      this._el.innerHTML = template;
    }
}