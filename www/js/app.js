function swipe(page) {
    const main = document.querySelector('main');
    if (page === 1) {
        main.scroll({
            left: 0,
            behavior: 'smooth',
        });
    } else {
        main.scroll({
            left: main.scrollWidth,
            behavior: 'smooth',
        });
    }
}

function updateFormFields() {
    // resetar general
    const formType = document.getElementById('requestType').value;
    // filtros básicos
    document.querySelector('.basic-filters').innerHTML =
        formStructure[formType].basicFilters;
    // filtros avançados
    const advFilters = document.querySelector('.advanced-filters');
    advFilters.innerHTML = formStructure[formType].advancedFilters;
}

function load() {
    // form submit
    const requestBtn = document.querySelector('#btn-form-submit');
    requestBtn.addEventListener('click', requestBtnOnClick);

    // form dynamic
    const typeSelect = document.querySelector('#requestType');
    typeSelect.addEventListener('change', updateFormFields);
    updateFormFields();

    // set default config values if needed
    if (!privateKey()) {
        localStorage.setItem('privkey', '');
    }
    if (!publicKey()) {
        localStorage.setItem('pubkey', DEFAULT_PUB_KEY);
    }

    // Pull default values from config
    overrideInputs();
}

load();
