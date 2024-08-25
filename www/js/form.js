// Components (convert to normal function tomorrow)
class InputListComponents {
    static newInputListTextBox(placeholder = '0') {
        const html = `
            <span class="input-group-text">ID</span>
            <input
                type="number"
                class="form-control"
                placeholder="${placeholder}"
            />
            <span class="input-group-text input-list-remove"
                >-</span
            >
        `;
        const element = document.createElement('div');
        element.classList.add('input-group');
        element.innerHTML = html;

        const removeButton = element.querySelector('.input-list-remove');
        removeButton.addEventListener('click', deleteFromInputList);
        return element;
    }
}

// Input List handler
function deleteFromInputList(event) {
    return event.currentTarget.parentNode.remove();
}

function addToInputList(event) {
    const button = event.currentTarget;
    const element = InputListComponents.newInputListTextBox(
        button.dataset.inputPlaceholder
    );
    button.insertAdjacentElement('beforebegin', element);
}

// Smart form fields
function reloadFormFields() {
    const formType = document.getElementById('apiType').value;
    clearForm();
    document.querySelector('.basic-filters').innerHTML =
        formStructure[formType].basicFilters;
}

function clearForm() {
    // document.querySelector('form').reset();
    // TODO: Make a custom reset because it is resetting the typeSelect as well
}

function loadEventListeners() {
    const inputListButtons = document.querySelectorAll('.input-list > button');
    inputListButtons.forEach((b) => {
        b.addEventListener('click', addToInputList);
    });

    const typeSelect = document.querySelector('#apiType');
    typeSelect.addEventListener('change', reloadFormFields);

    reloadFormFields();
}

loadEventListeners();
