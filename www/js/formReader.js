const formReader = (function () {
    function readBasic() {
        const form = document.querySelector('form#api-form');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        return data;
    }

    function readInputLists() {
        const form = document.querySelector('form#api-form');
        const inputLists = form.querySelectorAll('.input-list');
        const data = {};

        for (const list of inputLists) {
            let inputs = [...list.querySelectorAll('input')];
            data[list.id] = inputs.map((i) => i.value);
        }
        return data;
    }

    function readFormData() {
        const basicData = readBasic();
        const advancedData = readInputLists();
        const data = { ...basicData, ...advancedData };
        return data;
    }

    /**
     * Removes empty string and arrays from the object
     * @param {object} object Object to remove empty entries
     */
    function removeEmptyEntries(object) {
        if (typeof object !== 'object' || object === null) {
            return object;
        }

        for (const key in object) {
            const value = object[key];

            // remove empty string
            if (typeof value === 'string' && value === '') {
                delete object[key];
            }

            // remove all empty arrays, ignoring empty strings
            if (Array.isArray(value)) {
                const filtered = value.filter((e) => e !== '');
                if (filtered.length === 0) {
                    delete object[key];
                }
            }
        }
        return object;
    }
    return {
        /**
         *
         * @returns Formatted form data to generate the request url
         */
        read: () => {
            let data;
            data = readFormData();
            data = removeEmptyEntries(data);
            return data;
        },
    };
})();
