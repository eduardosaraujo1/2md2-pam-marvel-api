const formStructure = {
    characters: {
        advancedFilters: `
            <legend>Filtros avançados</legend>
            ${inputList({
                label: 'Comics relacionadas a personagem',
                idSuffix: 'comics',
                placeholder: '82970',
            })}
            ${inputList({
                label: 'Séries relacionadas a personagem',
                idSuffix: 'series',
                placeholder: '31445',
            })}
            ${inputList({
                label: 'Eventos relacionados a personagem',
                idSuffix: 'events',
                placeholder: '116',
            })}
            ${inputList({
                label: 'Histórias relacionadas a personagem',
                idSuffix: 'stories',
                placeholder: '152',
            })}
        `,
        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${inputWithPartial({ label: 'Nome', id: 'apiName' })}
            ${typedInput({
                label: 'Modificado desde',
                id: 'apiModifiedSince',
                type: 'date',
            })}
            ${toggleControlsGroup({
                label: 'Ordenar por',
                radios: [
                    {
                        type: 'radio',
                        label: 'Nome',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Name',
                        checked: true,
                    },
                    {
                        type: 'radio',
                        label: 'Data de modificação',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'ModifyDate',
                        checked: false,
                    },
                    {
                        type: 'checkbox',
                        label: 'Decrescente',
                        idPrefix: 'apiOrderByOrder',
                        idSuffix: 'Desc',
                        checked: false,
                    },
                ],
            })}
        `,
    },
    comics: {
        advancedFilters: `
            <legend>Filtros avançados</legend>
            ${inputList({
                label: 'Personagens relacionados a comic',
                idSuffix: 'characters',
                placeholder: '1011334',
            })}
            ${inputList({
                label: 'Creators relacionados a comic',
                idSuffix: 'creators',
                placeholder: '13970',
            })}
            ${inputList({
                label: 'Séries relacionadas a comic',
                idSuffix: 'series',
                placeholder: '31445',
            })}
            ${inputList({
                label: 'Eventos relacionados a comic',
                idSuffix: 'events',
                placeholder: '116',
            })}
            ${inputList({
                label: 'Histórias relacionadas a comic',
                idSuffix: 'stories',
                placeholder: '152',
            })}
        `,
        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${inputWithPartial({ label: 'Título', id: 'apiTitle' })}
            ${typedInput({
                type: 'date',
                label: 'Modificado desde',
                id: 'apiModifiedSince',
            })}
            ${toggleControlsGroup({
                label: 'Ordenar por',
                radios: [
                    {
                        type: 'radio',
                        label: 'Título',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Title',
                        checked: true,
                    },
                    {
                        type: 'radio',
                        label: 'Número da edição',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Issue',
                    },
                    {
                        type: 'radio',
                        idPrefix: 'apiOrderBy',
                        idSufix: 'FOC',
                        label: 'Data FOC',
                    },
                    {
                        type: 'radio',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Sale',
                        label: 'Ultimo desconto',
                    },
                    {
                        type: 'radio',
                        label: 'Data de modificação',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'ModifyDate',
                        checked: false,
                    },
                    {
                        type: 'checkbox',
                        label: 'Decrescente',
                        idPrefix: 'apiOrderByOrder',
                        idSuffix: 'Desc',
                        checked: false,
                    },
                ],
            })}
        `,
    },
    creators: {
        advancedFilters: `
            <legend>Filtros avançados</legend>
            ${inputList({
                label: 'Comics relacionadas ao creator',
                idSuffix: 'comics',
                placeholder: '82970',
            })}
            ${inputList({
                label: 'Séries relacionadas ao creator',
                idSuffix: 'series',
                placeholder: '31445',
            })}
            ${inputList({
                label: 'Eventos relacionados ao creator',
                idSuffix: 'events',
                placeholder: '116',
            })}
            ${inputList({
                label: 'Histórias relacionadas ao creator',
                idSuffix: 'stories',
                placeholder: '152',
            })}
        `,
        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${inputWithPartial({ label: 'Primeiro nome', id: 'apiFirstName' })}
            ${inputWithPartial({ label: 'Nome do meio', id: 'apiMiddleName' })}
            ${inputWithPartial({ label: 'Sobrenome', id: 'apiLastName' })}
            ${typedInput({
                type: 'text',
                label: 'Sufixo',
                id: 'apiSuffix',
                placeholder: 'Sr., Sra.',
            })}
            ${toggleControlsGroup({
                label: 'Ordenar por',
                radios: [
                    {
                        type: 'radio',
                        label: 'Título',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Title',
                        checked: true,
                    },
                    {
                        type: 'radio',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'FirstName',
                        label: 'Primeiro nome',
                    },
                    {
                        type: 'radio',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'MiddleName',
                        label: 'Nome do meio',
                    },
                    {
                        type: 'radio',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'LastName',
                        label: 'Ultimo nome',
                    },
                    {
                        type: 'radio',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Suffix',
                        label: 'Sufixo',
                    },
                    {
                        type: 'radio',
                        label: 'Data de modificação',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'ModifyDate',
                        checked: false,
                    },
                    {
                        type: 'checkbox',
                        label: 'Decrescente',
                        idPrefix: 'apiOrderByOrder',
                        idSuffix: 'Desc',
                        checked: false,
                    },
                ],
            })}
        `,
    },
    events: {
        advancedFilters: `
            <legend>Filtros avançados</legend>
            ${inputList({
                label: 'Creators relacionados ao evento',
                idSuffix: 'creators',
                placeholder: '13970',
            })}
            ${inputList({
                label: 'Personagens relacionados ao evento',
                idSuffix: 'characters',
                placeholder: '1011334',
            })}
            ${inputList({
                label: 'Séries relacionadas ao evento',
                idSuffix: 'series',
                placeholder: '31445',
            })}
            ${inputList({
                label: 'Comics relacionadas ao evento',
                idSuffix: 'comics',
                placeholder: '82970',
            })}
            ${inputList({
                label: 'Histórias relacionadas ao evento',
                idSuffix: 'stories',
                placeholder: '152',
            })}
        `,

        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${inputWithPartial({ label: 'Nome', id: 'apiName' })}
            ${toggleControlsGroup({
                label: 'Ordenar por',
                radios: [
                    {
                        type: 'radio',
                        label: 'Nome',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Name',
                        checked: true,
                    },
                    {
                        type: 'radio',
                        label: 'Data de inicio',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'StartDate',
                        checked: false,
                    },
                    {
                        type: 'radio',
                        label: 'Data de modificação',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'ModifyDate',
                        checked: false,
                    },
                    {
                        type: 'checkbox',
                        label: 'Decrescente',
                        idPrefix: 'apiOrderByOrder',
                        idSuffix: 'Desc',
                        checked: false,
                    },
                ],
            })}
        `,
    },
    series: {
        advancedFilters: `
            <legend>Filtros avançados</legend>
            ${inputList({
                label: 'Comics relacionadas à série',
                idSuffix: 'comics',
                placeholder: '82970',
            })}
            ${inputList({
                label: 'Histórias relacionadas à série',
                idSuffix: 'stories',
                placeholder: '152',
            })}
            ${inputList({
                label: 'Eventos relacionados à série',
                idSuffix: 'events',
                placeholder: '116',
            })}
            ${inputList({
                label: 'Creators relacionados à série',
                idSuffix: 'creators',
                placeholder: '13970',
            })}
            ${inputList({
                label: 'Personagens relacionados à série',
                idSuffix: 'characters',
                placeholder: '1011334',
            })}
        `,
        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${inputWithPartial({ label: 'Título', id: 'apiTitle' })}
            ${toggleControlsGroup({
                label: 'Ordenar por',
                radios: [
                    {
                        type: 'radio',
                        label: 'Nome',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Name',
                        checked: true,
                    },
                    {
                        type: 'radio',
                        label: 'Título',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Title',
                        checked: false,
                    },
                    {
                        type: 'radio',
                        label: 'Ano de inicio',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'StartYear',
                        checked: false,
                    },
                    {
                        type: 'radio',
                        label: 'Data de modificação',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'ModifyDate',
                        checked: false,
                    },
                    {
                        type: 'checkbox',
                        label: 'Decrescente',
                        idPrefix: 'apiOrderByOrder',
                        idSuffix: 'Desc',
                        checked: false,
                    },
                ],
            })}
        `,
    },
    stories: {
        advancedFilters: `
            <legend>Filtros avançados</legend>
            ${inputList({
                label: 'Comics relacionadas à história',
                idSuffix: 'comics',
                placeholder: '82970',
            })}
            ${inputList({
                label: 'Séries relacionadas à história',
                idSuffix: 'series',
                placeholder: '31445',
            })}
            ${inputList({
                label: 'Eventos relacionados à história',
                idSuffix: 'events',
                placeholder: '116',
            })}
            ${inputList({
                label: 'Creators relacionados à história',
                idSuffix: 'creators',
                placeholder: '13970',
            })}
            ${inputList({
                label: 'Personagens relacionados à história',
                idSuffix: 'characters',
                placeholder: '1011334',
            })}
        `,
        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            ${toggleControlsGroup({
                label: 'Ordenar por',
                radios: [
                    {
                        type: 'radio',
                        label: 'ID',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'Id',
                        checked: true,
                    },
                    {
                        type: 'radio',
                        label: 'Data de modificação',
                        idPrefix: 'apiOrderBy',
                        idSuffix: 'ModifyDate',
                        checked: false,
                    },
                    {
                        type: 'checkbox',
                        label: 'Decrescente',
                        idPrefix: 'apiOrderByOrder',
                        idSuffix: 'Desc',
                        checked: false,
                    },
                ],
            })}
        `,
    },
};

function inputWithPartial(params) {
    return `<div class="input-row input-with-partial">
        <div class="input" style="flex: 1">
            <label class="form-label" for="${params.id}">${params.label}</label>
            <input
                type="text"
                name="${params.id}"
                id="${params.id}"
                class="form-control"
            />
        </div>
        <div class="input mb-2">
            <div class="form-check">
                <input
                    type="checkbox"
                    name="${params.id}Partial"
                    id="${params.id}Partial"
                    class="form-check-input"
                    checked=""
                />
                <label class="form-check-label" for="apiNamePartial"
                    >Parcial</label
                >
            </div>
        </div>
    </div>`;
}
// required label, id, type
function typedInput(params) {
    params['placeholder'] = params['placeholder'] || '';
    return `
        <div class="input ${params.type}-input">
            <label class="form-label" for="apiModifiedSince">
            ${params.label}
            </label>
            <input
                type="${params.type}"
                name="${params.id}"
                id="${params.id}"
                placeholder="${params['placeholder']}"
                class="form-control"
            />
        </div>
    `;
}
// required label, idPrefix, idSuffix, type, checked
function radioOrCheckbox(params) {
    const checked = params.checked ? 'checked' : '';
    const id = params.idPrefix + params.idSuffix;
    return `
        <div class="form-check ${params.type}-input">
            <input
                type="${params.type}"
                name="${params.idPrefix}"
                id="${id}"
                class="form-check-input"
                ${checked}
            />
            <label class="form-check-label" for="${id}">${params.label}</label>
        </div>    
    `;
}
// required label, array of toggle controls{ label, idPrefix, idSuffix, type, checked}
function toggleControlsGroup(params) {
    let html = `
        <div class="radio-container">
            <label class="form-label radio-label">
                ${params.label}
                <span class="required-icon">*</span>
            </label>\n
    `;
    for (const rc of params.radios) {
        html += radioOrCheckbox(rc) + '\n';
    }
    html += `</div> `;
    return html;
}

// required label, idSuffix, placeholder,
function inputList(params) {
    return `<div class="input-list" id="inputList${params.idSuffix}">
        <h6>${params.label}</h6>
        <button
            onclick="inputListAddItem(event)"
            class="btn btn-secondary input-list-add"
            data-input-placeholder="${params.placeholder}"
        >
            Add
        </button>
        <hr/>
    </div>`;
}
