const formStructure = (() => {
    function validateObjectInputs(object, inputList) {
        for (const input of inputList) {
            if (object[input] == undefined) {
                throw new Error(
                    `Object keys {${Object.keys(object).join(
                        ', '
                    )}} does not match inputList [${inputList}]`
                );
            }
        }
        return true;
    }
    function HTMLAttributesFromObject(object) {
        let result = '';
        if (typeof object === 'object') {
            for (const key in object) {
                result += `${key}=${object[key]} `;
            }
        }
        return result;
    }
    /**
     *
     * @param {object} params { id, label, type, attributes? }
     * @returns
     */
    // required
    function TypedInput(params) {
        validateObjectInputs(params, ['id', 'label', 'type']);
        return `
        <div class="input ${params.type}-input">
            <label class="form-label" for="modifiedSince">
            ${params.label}
            </label>
            <input
                type="${params.type}"
                name="${params.id}"
                id="${params.id}"
                ${HTMLAttributesFromObject(params.attributes)}
                class="form-control"
            />
        </div>
    `;
    }
    /**
     *
     * @param {object} params - { type, id, name, value, label, checked?, attributes? }
     */
    function ToggleControl(params) {
        validateObjectInputs(params, ['id', 'label', 'type', 'name', 'value']);
        const checked = params.checked ? 'checked' : '';
        return `
        <div class="form-check ${params.type}-input">
            <input
                type="${params.type}"
                name="${params.name}"
                id="${params.name + params.id}"
                value="${params.value}"
                ${HTMLAttributesFromObject(params.attributes)}
                class="form-check-input"
                ${checked}
            />
            <label class="form-check-label" for="${params.name + params.id}">${
            params.label
        }</label>
        </div>    
    `;
    }
    /**
     *
     * @param {object} params - { name, label, controls { id, value, label, checked? } }
     */
    function RadioGroup(params) {
        validateObjectInputs(params, ['name', 'label', 'controls']);
        let html = `
        <div class="radio-container">
            <label class="form-label radio-label">
                ${params.label}
            </label>\n
    `;
        for (const rc of params.controls) {
            rc.type = 'radio';
            rc.name = params.name;
            html += ToggleControl(rc) + '\n';
        }
        html += `</div> `;
        // debugger;
        return html;
    }

    /**
     *
     * @param {object} params - { id, label, placeholder }
     */
    function InputList(params) {
        validateObjectInputs(params, ['id', 'label', 'placeholder']);
        return `<div class="input-list" id="${params.id}">
        <h6>${params.label}</h6>
        <button
            type="button"
            onclick="inputListAddItem(event)"
            class="btn btn-secondary input-list-add"
            data-input-placeholder="${params.placeholder}"
        >
            Add
        </button>
        <br> <br>
    </div>`;
    }

    /**
     *
     * @param {object} params - { id, label, options {id, label}, attributes?}
     */
    function SelectComponent(params) {
        validateObjectInputs(params, ['id', 'label', 'options']);
        createObject = (params) => {
            return `<option value="${params.id}">${params.label}</option>`;
        };

        const attributes = params.attributes || '';
        let html = `
        <div class="input select-input">
            <label for="${params.id}" class="form-label">${params.label}</label>
            <select name="${params.id}" id="${params.id}" ${attributes} class="form-select">\n
        `;
        for (const option of params.options) {
            html += `${createObject(option)}\n`;
        }
        html += `
            </select>
        </div>
        `;
        return html;
    }

    return {
        characters: {
            advancedFilters: `
            <hr>
            <legend>Filtros avançados</legend>
            ${InputList({
                id: 'comics',
                label: 'Comics relacionadas a personagem',
                placeholder: '82970',
            })}
            ${InputList({
                id: 'series',
                label: 'Séries relacionadas a personagem',
                placeholder: '31445',
            })}
            ${InputList({
                id: 'events',
                label: 'Eventos relacionados a personagem',
                placeholder: '116',
            })}
            ${InputList({
                id: 'stories',
                label: 'Histórias relacionadas a personagem',
                placeholder: '152',
            })}
        `,
            basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${TypedInput({ type: 'text', id: 'name', label: 'Nome completo' })}
            ${TypedInput({
                type: 'text',
                id: 'nameStartsWith',
                label: 'Nome parcial',
            })}
            ${TypedInput({
                id: 'modifiedSince',
                label: 'Modificado desde',
                type: 'date',
            })}
            ${RadioGroup({
                label: 'Ordenar por',
                name: 'orderBy',
                controls: [
                    {
                        id: 'name',
                        value: 'name',
                        label: 'Nome',
                        checked: true,
                    },
                    {
                        id: 'modified',
                        value: 'modified',
                        label: 'Data de modificação',
                        checked: false,
                    },
                ],
            })}
            ${ToggleControl({
                type: 'checkbox',
                name: 'orderByDesc',
                id: '',
                label: 'Inverter ordem',
                value: '',
                checked: false,
                attributes: {
                    onchange: 'orderByCheckboxHandle(event)',
                },
            })}
        `,
        },
        comics: {
            advancedFilters: `
            <hr>
            <legend>Filtros avançados</legend>
            ${InputList({
                label: 'Personagens relacionados a comic',
                id: 'characters',
                placeholder: '1011334',
            })}
            ${InputList({
                label: 'Creators relacionados a comic',
                id: 'creators',
                placeholder: '13970',
            })}
            ${InputList({
                label: 'Séries relacionadas a comic',
                id: 'series',
                placeholder: '31445',
            })}
            ${InputList({
                label: 'Eventos relacionados a comic',
                id: 'events',
                placeholder: '116',
            })}
            ${InputList({
                label: 'Histórias relacionadas a comic',
                id: 'stories',
                placeholder: '152',
            })}
        `,
            basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${TypedInput({
                type: 'text',
                label: 'Título completo',
                id: 'title',
            })}
            ${TypedInput({
                type: 'text',
                label: 'Título parcial',
                id: 'titleStartsWith',
            })}
            ${TypedInput({
                type: 'date',
                label: 'Modificado desde',
                id: 'modifiedSince',
            })}
            ${RadioGroup({
                label: 'Ordenar por',
                name: 'orderBy',
                controls: [
                    {
                        id: 'title',
                        label: 'Título',
                        value: 'title',
                        checked: true,
                    },
                    {
                        id: 'issueNumber',
                        label: 'Número da edição',
                        value: 'issueNumber',
                    },
                    {
                        id: 'focDate',
                        value: 'focDate',
                        label: 'Data FOC',
                    },
                    {
                        id: 'onsaleDate',
                        label: 'Ultimo desconto',
                        value: 'onsaleDate',
                    },
                    {
                        id: 'modified',
                        label: 'Data de modificação',
                        checked: false,
                        value: 'modified',
                    },
                ],
            })}
            ${ToggleControl({
                type: 'checkbox',
                name: 'orderByDesc',
                id: '',
                label: 'Inverter ordem',
                value: '',
                checked: false,
                attributes: {
                    onchange: 'orderByCheckboxHandle(event)',
                },
            })}
            <hr>
            <legend>Filtros de comics</legend>

            ${SelectComponent({
                id: 'format',
                label: 'Formato',
                options: [
                    {
                        id: '',
                        label: '',
                    },
                    {
                        id: 'comic',
                        label: 'Comic',
                    },
                    {
                        id: 'magazine',
                        label: 'Revista',
                    },
                    {
                        id: 'trade paperback',
                        label: 'Edição Encadernada',
                    },
                    {
                        id: 'hardcover',
                        label: 'Capa Dura',
                    },
                    {
                        id: 'digest',
                        label: 'Digest',
                    },
                    {
                        id: 'graphic novel',
                        label: 'Graphic Novel',
                    },
                    {
                        id: 'digital comic',
                        label: 'Quadrinho Digital',
                    },
                    {
                        id: 'infinite comic',
                        label: 'Infinite Comic',
                    },
                ],
            })}
            ${RadioGroup({
                label: 'Tipo de formato',
                name: 'formatType',
                controls: [
                    {
                        label: 'Comic',
                        id: 'comic',
                        value: 'comic',
                        checked: true,
                    },
                    {
                        label: 'Coleção',
                        id: 'collection',
                        value: 'collection',
                    },
                ],
            })}
            ${RadioGroup({
                label: 'Ocultar variações?',
                name: 'noVariants',
                controls: [
                    {
                        label: 'Ignore',
                        id: 'ignore',
                        checked: true,
                        value: '',
                    },
                    {
                        label: 'Sim',
                        id: 'yes',
                        checked: false,
                        value: 'true',
                    },
                    {
                        label: 'Não',
                        id: 'no',
                        checked: false,
                        value: 'false',
                    },
                ],
            })}
            ${RadioGroup({
                label: 'Inclui versão digital?',
                name: 'hasDigitalIssue',
                controls: [
                    {
                        label: 'Ignore',
                        id: 'ignore',
                        checked: true,
                        value: '',
                    },
                    {
                        label: 'Sim',
                        id: 'yes',
                        checked: false,
                        value: 'true',
                    },
                    {
                        label: 'Não',
                        id: 'no',
                        checked: false,
                        value: 'false',
                    },
                ],
            })}
            ${TypedInput({
                type: 'number',
                label: 'Ano de inicio',
                id: 'startYear',
                attributes: {
                    min: 1930,
                    max: new Date().getFullYear().toString(),
                    step: 1,
                    placeholder: '2000',
                },
            })}
            ${SelectComponent({
                id: 'dateDescriptor',
                label: 'Publicações/alterações',
                options: [
                    {
                        id: '',
                        label: '',
                    },
                    {
                        id: 'lastWeek',
                        label: 'Semana passada',
                    },
                    {
                        id: 'thisWeek',
                        label: 'Essa semana',
                    },
                    {
                        id: 'nextWeek',
                        label: 'Semana que vem',
                    },
                    {
                        id: 'lastWeek',
                        label: 'Esse mês',
                    },
                ],
            })}
            <hr>
            <legend>Identificadores</legend>
            ${TypedInput({
                type: 'int',
                label: 'Issue Number',
                id: 'issueNumber',
                attributes: {
                    min: 0,
                    step: 1,
                    placeholder: '123',
                },
            })}
            ${TypedInput({
                type: 'text',
                label: 'Diamond Code',
                id: 'diamondCode',
                attributes: {
                    min: 0,
                    step: 1,
                    placeholder: 'APR201234',
                },
            })}
            ${TypedInput({
                type: 'int',
                label: 'Digital ID',
                id: 'digitalId',
                attributes: {
                    min: 0,
                    step: 1,
                    placeholder: '456',
                },
            })}
            ${TypedInput({
                type: 'text',
                label: 'UPC',
                id: 'upc',
                attributes: {
                    min: 0,
                    step: 1,
                    placeholder: '759606200088',
                },
            })}
            ${TypedInput({
                type: 'text',
                label: 'ISBN',
                id: 'isbn',
                attributes: {
                    min: 0,
                    step: 1,
                    placeholder: '9780785190659',
                },
            })}
            ${TypedInput({
                type: 'text',
                label: 'EAN',
                id: 'ean',
                attributes: {
                    min: 0,
                    step: 1,
                    placeholder: '9780785190659',
                },
            })}
            ${TypedInput({
                type: 'text',
                label: 'ISSN',
                id: 'issn',
                attributes: {
                    min: 0,
                    step: 1,
                    placeholder: '1234-5679',
                },
            })}
        `,
        },
        creators: {
            advancedFilters: `
            <hr>
            <legend>Filtros avançados</legend>
            ${InputList({
                label: 'Comics relacionadas ao creator',
                id: 'comics',
                placeholder: '82970',
            })}
            ${InputList({
                label: 'Séries relacionadas ao creator',
                id: 'series',
                placeholder: '31445',
            })}
            ${InputList({
                label: 'Eventos relacionados ao creator',
                id: 'events',
                placeholder: '116',
            })}
            ${InputList({
                label: 'Histórias relacionadas ao creator',
                id: 'stories',
                placeholder: '152',
            })}
        `,
            basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${TypedInput({
                type: 'text',
                label: 'Primeiro nome',
                id: 'firstName',
            })}
            ${TypedInput({
                type: 'text',
                label: 'Primeiro nome (primeiras letras)',
                id: 'firstNameStartsWith',
            })}
            ${TypedInput({
                type: 'text',
                label: 'Nome do meio',
                id: 'middleName',
            })}
            ${TypedInput({
                type: 'text',
                label: 'Nome do meio (primeiras letras)',
                id: 'middleNameStartsWith',
            })}
            ${TypedInput({ type: 'text', label: 'Sobrenome', id: 'lastName' })}
            ${TypedInput({
                type: 'text',
                label: 'Sobrenome (primeiras letras)',
                id: 'lastNameStartsWith',
            })}
            ${TypedInput({
                type: 'text',
                label: 'Sufixo',
                id: 'suffix',
                attributes: {
                    placeholder: 'Sr., Sra.',
                },
            })}
            ${TypedInput({
                id: 'modifiedSince',
                label: 'Modificado desde',
                type: 'date',
            })}
            ${RadioGroup({
                label: 'Ordenar por',
                name: 'orderBy',
                controls: [
                    {
                        id: 'firstName',
                        label: 'Primeiro nome',
                        value: 'firstName',
                        checked: true,
                    },
                    {
                        id: 'middleName',
                        label: 'Nome do meio',
                        value: 'middleName',
                    },
                    {
                        id: 'lastName',
                        label: 'Sobrenome',
                        value: 'lastName',
                    },
                    {
                        id: 'suffix',
                        label: 'Sufixo',
                        value: 'suffix',
                    },
                    {
                        label: 'Data de modificação',
                        id: 'modified',
                        checked: false,
                        value: 'modified',
                    },
                ],
            })}
            ${ToggleControl({
                type: 'checkbox',
                name: 'orderByDesc',
                id: '',
                label: 'Inverter ordem',
                value: '',
                checked: false,
                attributes: {
                    onchange: 'orderByCheckboxHandle(event)',
                },
            })}
            `,
        },
        events: {
            advancedFilters: `
            <hr>
            <legend>Filtros avançados</legend>
            ${InputList({
                label: 'Creators relacionados ao evento',
                id: 'creators',
                placeholder: '13970',
            })}
            ${InputList({
                label: 'Personagens relacionados ao evento',
                id: 'characters',
                placeholder: '1011334',
            })}
            ${InputList({
                label: 'Séries relacionadas ao evento',
                id: 'series',
                placeholder: '31445',
            })}
            ${InputList({
                label: 'Comics relacionadas ao evento',
                id: 'comics',
                placeholder: '82970',
            })}
            ${InputList({
                label: 'Histórias relacionadas ao evento',
                id: 'stories',
                placeholder: '152',
            })}
        `,
            basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${TypedInput({ type: 'text', label: 'Nome completo', id: 'name' })}
            ${TypedInput({
                type: 'text',
                label: 'Nome parcial',
                id: 'nameStartsWith',
            })}
            ${TypedInput({
                id: 'modifiedSince',
                label: 'Modificado desde',
                type: 'date',
            })}
            ${RadioGroup({
                label: 'Ordenar por',
                name: 'orderBy',
                controls: [
                    {
                        label: 'Nome',
                        id: 'name',
                        checked: true,
                        value: 'name',
                    },
                    {
                        label: 'Data de inicio',
                        id: 'startDate',
                        checked: false,
                        value: 'startDate',
                    },
                    {
                        label: 'Data de modificação',
                        id: 'modified',
                        checked: false,
                        value: 'modified',
                    },
                ],
            })}
            ${ToggleControl({
                type: 'checkbox',
                name: 'orderByDesc',
                id: '',
                label: 'Inverter ordem',
                value: '',
                checked: false,
                attributes: {
                    onchange: 'orderByCheckboxHandle(event)',
                },
            })}
        `,
        },
        series: {
            advancedFilters: `
            <hr>
            <legend>Filtros avançados</legend>
            ${InputList({
                label: 'Comics relacionadas à série',
                id: 'comics',
                placeholder: '82970',
            })}
            ${InputList({
                label: 'Histórias relacionadas à série',
                id: 'stories',
                placeholder: '152',
            })}
            ${InputList({
                label: 'Eventos relacionados à série',
                id: 'events',
                placeholder: '116',
            })}
            ${InputList({
                label: 'Creators relacionados à série',
                id: 'creators',
                placeholder: '13970',
            })}
            ${InputList({
                label: 'Personagens relacionados à série',
                id: 'characters',
                placeholder: '1011334',
            })}
        `,
            basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${TypedInput({
                type: 'text',
                label: 'Título completo',
                id: 'title',
            })}
            ${TypedInput({
                type: 'text',
                label: 'Título parcial',
                id: 'titleStartsWith',
            })}
            ${TypedInput({
                id: 'modifiedSince',
                label: 'Modificado desde',
                type: 'date',
            })}
            ${RadioGroup({
                label: 'Ordenar por',
                name: 'orderBy',
                controls: [
                    {
                        label: 'Título',
                        id: 'title',
                        checked: true,
                        value: 'title',
                    },
                    {
                        label: 'Ano de inicio',
                        id: 'startYear',
                        checked: false,
                        value: 'startYear',
                    },
                    {
                        label: 'Data de modificação',
                        id: 'modifyDate',
                        checked: false,
                        value: 'modified',
                    },
                ],
            })}
            ${ToggleControl({
                type: 'checkbox',
                name: 'orderByDesc',
                id: '',
                label: 'Inverter ordem',
                value: '',
                checked: false,
                attributes: {
                    onchange: 'orderByCheckboxHandle(event)',
                },
            })}
            <hr>
        <legend>Filtros de série</legend>
        ${SelectComponent({
            id: 'seriesType',
            label: 'Tipo de série',
            options: [
                {
                    id: '',
                    label: '',
                },
                {
                    id: 'collection',
                    label: 'Coleção',
                },
                {
                    id: 'one shot',
                    label: 'Edição Única',
                },
                {
                    id: 'limited',
                    label: 'Série Limitada',
                },
                {
                    id: 'ongoing',
                    label: 'Em Andamento',
                },
            ],
        })}
        ${SelectComponent({
            id: 'contains',
            label: 'Série contém',
            options: [
                {
                    id: '',
                    label: '',
                },
                {
                    id: 'comic',
                    label: 'Comic',
                },
                {
                    id: 'magazine',
                    label: 'Revista',
                },
                {
                    id: 'trade paperback',
                    label: 'Edição Encadernada',
                },
                {
                    id: 'hardcover',
                    label: 'Capa Dura',
                },
                {
                    id: 'digest',
                    label: 'Digest',
                },
                {
                    id: 'graphic novel',
                    label: 'Graphic Novel',
                },
                {
                    id: 'digital comic',
                    label: 'Quadrinho Digital',
                },
                {
                    id: 'infinite comic',
                    label: 'Infinite Comic',
                },
            ],
        })}
        ${TypedInput({
            type: 'number',
            label: 'Ano de lançamento',
            id: 'startYear',
            attributes: {
                min: 1930,
                max: new Date().getFullYear().toString(),
                step: 1,
                placeholder: 2000,
            },
        })}
        `,
        },
        stories: {
            advancedFilters: `
            <hr>
            <legend>Filtros avançados</legend>
            ${InputList({
                label: 'Comics relacionadas à história',
                id: 'comics',
                placeholder: '82970',
            })}
            ${InputList({
                label: 'Séries relacionadas à história',
                id: 'series',
                placeholder: '31445',
            })}
            ${InputList({
                label: 'Eventos relacionados à história',
                id: 'events',
                placeholder: '116',
            })}
            ${InputList({
                label: 'Creators relacionados à história',
                id: 'creators',
                placeholder: '13970',
            })}
            ${InputList({
                label: 'Personagens relacionados à história',
                id: 'characters',
                placeholder: '1011334',
            })}
        `,
            basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${TypedInput({
                id: 'modifiedSince',
                label: 'Modificado desde',
                type: 'date',
            })}
            ${RadioGroup({
                label: 'Ordenar por',
                name: 'orderBy',
                controls: [
                    {
                        label: 'ID',
                        id: 'id',
                        checked: true,
                        value: 'id',
                    },
                    {
                        label: 'Data de modificação',
                        id: 'modifyDate',
                        checked: false,
                        value: 'modified',
                    },
                ],
            })}
            ${ToggleControl({
                type: 'checkbox',
                name: 'orderByDesc',
                id: '',
                label: 'Inverter ordem',
                value: '',
                checked: false,
                attributes: {
                    onchange: 'orderByCheckboxHandle(event)',
                },
            })}
        `,
        },
    };
})();

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

// Order by checkboxes
function orderByCheckboxHandle(event) {
    const addPrefix = (str) => (str.startsWith('-') ? str : `-${str}`);
    const removePrefix = (str) => (str.startsWith('-') ? str.slice(1) : str);
    const radios = document.querySelectorAll("input[name='orderBy']");
    if (event.currentTarget.checked) {
        radios.forEach((radio) => {
            radio.value = addPrefix(radio.value);
        });
    } else {
        radios.forEach((radio) => {
            radio.value = removePrefix(radio.value);
        });
    }
}
