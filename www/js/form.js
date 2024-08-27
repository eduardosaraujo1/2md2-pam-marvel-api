// inputList logic
function createInputListItem(placeholder = '0') {
    const itemHtml = `
        <div class="input-group">
            <span class="input-group-text">ID</span>
            <input
                type="number"
                placeholder="${placeholder}"
                min="0"
                step="1"
                class="form-control"
            />
            <span
                onclick="event.currentTarget.parentNode.remove()"
                class="input-group-text input-list-remove"
                >-</span
            >
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = itemHtml.trim();
    return template.content.firstChild;
}

function inputListAddItem(event) {
    const button = event.currentTarget;
    const placeholder = button.dataset.inputPlaceholder;
    const element = createInputListItem(placeholder);
    button.insertAdjacentElement('beforebegin', element);
}

// Smart form fields
function reloadFormFields() {
    // resetar general
    clearGeneralFields();
    const formType = document.getElementById('requestType').value;
    // filtros básicos
    document.querySelector('.basic-filters').innerHTML =
        formStructure[formType].basicFilters + '<hr>';
    // extra
    const extraFieldset = document.querySelector('.extra');
    const extraValue = formStructure[formType].extra;
    if (extraValue) {
        extraFieldset.innerHTML = extraValue + '<hr>';
        extraFieldset.style.display = 'block';
    } else {
        extraFieldset.innerHTML = '';
        extraFieldset.style.display = 'none';
    }
    // filtros avançados
    const advFilters = document.querySelector('.advanced-filters');
    advFilters.innerHTML = formStructure[formType].advancedFilters;
}

function clearGeneralFields() {
    // document.querySelector('form').reset();
    // TODO: Make a custom reset because it is resetting the typeSelect as well
}

function load() {
    const typeSelect = document.querySelector('#requestType');
    typeSelect.addEventListener('change', reloadFormFields);
    reloadFormFields();
}

load();
