'use strict';

let template = document.querySelector('[data-template="phones-catalogue"]').innerHTML;
let compiledTemplateCatalogue = _.template(template);

const SORT_TYPE_ALPHABETICAL = 'name';
const SORT_TYPE_NEWEST = 'age';

class PhonesCatalogue extends BaseComponent {
    constructor(options) {

        super(options);

        this._defaultPhones = options.phones;
        this.render(options.phones);
        
        this._el.addEventListener('click', (event) => {
            if (!event.target.closest('[data-element="phoneLink"]')) {
                return;
            }
            event.preventDefault();

            const phoneId = event.target.closest('[data-element="phoneId"]').dataset.id;
            let phoneSelected = new CustomEvent('phoneSelected', {
                detail: phoneId
            });

            this._el.dispatchEvent(phoneSelected);
        })
    }

    filterData(query) {
        const formQuery = query.toLocaleLowerCase();
        const filterPhones = this._defaultPhones
            .filter((phone) => {
                return phone.name.toLocaleLowerCase().includes(formQuery);
            });

        this.render(filterPhones);
    }

    sortPhones(type) {
        
        console.log(type);
        if (type === SORT_TYPE_ALPHABETICAL) {
            this.render(this._alphaPhones());
        }

        if (type === SORT_TYPE_NEWEST) {
            this.render(this._newPhones());
        }
    }

    render(phones) {
        this._el.innerHTML = compiledTemplateCatalogue({ phones });
    }

    _alphaPhones() {
        
        return this._defaultPhones.sort((phone1, phone2) => {
            if (phone1['name'] > phone2['name']) return 1;
            if (phone1['name'] < phone2['name']) return -1;
        });
    }

    _newPhones() {
        return this._defaultPhones.sort((phone1, phone2) => {
            if (phone1['age'] > phone2['age']) return 1;
            if (phone1['age'] < phone2['age']) return -1;
        });
    }
}