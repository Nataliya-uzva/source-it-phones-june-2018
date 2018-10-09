'use strict';

import HttpService from '../common/services/http-service.js';

const PhoneService = {
    getAll({ query = '', orderField = '' } = {}) {
        return HttpService.sendRequest('phones.json')
            .then(phones => {
                let filteredPhones = this._filter(phones, query);
                let sortedPhones = this._sort(filteredPhones, orderField);

                return sortedPhones;
            })
    },

    get(phoneId) {
        return HttpService.sendRequest(`phones/${phoneId}.json`);
    },


    _filter(phones, query) {
        return phones;
    },

    _sort(phones, orderField) {
        return phones;
    }
};

export default PhoneService;