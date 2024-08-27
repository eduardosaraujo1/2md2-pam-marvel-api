// Smart form fields
function reloadFormFields() {
    // resetar general
    const formType = document.getElementById('requestType').value;
    // filtros básicos
    document.querySelector('.basic-filters').innerHTML =
        formStructure[formType].basicFilters;
    // filtros avançados
    const advFilters = document.querySelector('.advanced-filters');
    advFilters.innerHTML = formStructure[formType].advancedFilters;
    // event listeners
}

function load() {
    const typeSelect = document.querySelector('#requestType');
    typeSelect.addEventListener('change', reloadFormFields);
    reloadFormFields();
}

load();
