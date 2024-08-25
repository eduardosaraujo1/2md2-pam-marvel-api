const formStructure = {
    characters: {
        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            <div class="input-row input-with-partial">
                <div class="input" style="flex: 1">
                    <label class="form-label" for="apiName">Nome</label>
                    <input
                        type="text"
                        name="apiName"
                        id="apiName"
                        class="form-control"
                    />
                </div>
                <div class="input mb-2">
                    <div class="form-check">
                        <input
                            type="checkbox"
                            name="apiNamePartial"
                            id="apiNamePartial"
                            class="form-check-input"
                            checked=""
                        />
                        <label class="form-check-label" for="apiNamePartial"
                            >Parcial</label
                        >
                    </div>
                </div>
            </div>
            <div class="input dateInput">
                <label class="form-label" for="apiModifiedSince">
                    Modificado desde
                </label>
                <input
                    type="date"
                    name="apiModifiedSince"
                    id="apiModifiedSince"
                    class="form-control"
                />
            </div>
            <div class="order-by-container input">
                <label class="form-label"
                    >Ordenar por
                    <span class="required-icon">*</span>
                </label>
                <div class="form-check radio-input">
                    <input
                        type="radio"
                        name="apiOrderBy"
                        id="apiOrderByName"
                        class="form-check-input"
                        checked=""
                    />
                    <label class="form-check-label" for="apiOrderByName">Nome</label>
                </div>
                <div class="form-check radio-input">
                    <input
                        type="radio"
                        name="apiOrderBy"
                        id="apiOrderByModifyDate"
                        class="form-check-input"
                    />
                    <label class="form-check-label" for="apiOrderByModifyDate"
                        >Data de modificação</label
                    >
                </div>
                <div class="form-check checkbox-input">
                    <input
                        type="checkbox"
                        name="apiOrderByDesc"
                        id="apiOrderByDesc"
                        class="form-check-input"
                    />
                    <label class="form-check-label" for="apiOrderByDesc"
                        >Descrescente</label
                    >
                </div>
            </div>
        `,
    },
    comics: {
        basicFilters: `
            <legend>Filtros (opcionais)</legend>
            <div class="input-row input-with-partial">
                <div class="input" style="flex: 1">
                    <label class="form-label" for="apiTitle">Título</label>
                    <input
                        type="text"
                        name="apiTitle"
                        id="apiTitle"
                        class="form-control"
                    />
                </div>
                <div class="input mb-2">
                    <div class="form-check">
                        <input
                            type="checkbox"
                            name="apiTitlePartial"
                            id="apiTitlePartial"
                            class="form-check-input"
                            checked=""
                        />
                        <label class="form-check-label" for="apiTitlePartial"
                            >Parcial</label
                        >
                    </div>
                </div>
            </div>
            <div class="input dateInput">
                <label class="form-label" for="apiModifiedSince">
                    Modificado desde
                </label>
                <input
                    type="date"
                    name="apiModifiedSince"
                    id="apiModifiedSince"
                    class="form-control"
                />
            </div>
            <div class="order-by-container input">
                <label class="form-label"
                    >Ordenar por
                    <span class="required-icon">*</span>
                </label>
                <div class="form-check radio-input">
                    <input
                        type="radio"
                        name="apiOrderBy"
                        id="apiOrderByTitle"
                        class="form-check-input"
                        checked=""
                    />
                    <label class="form-check-label" for="apiOrderByTitle">Título</label>
                </div>
                <div class="form-check radio-input">
                    <input
                        type="radio"
                        name="apiOrderBy"
                        id="apiOrderByIssue"
                        class="form-check-input"
                    />
                    <label class="form-check-label" for="apiOrderByIssue"
                        >Número da edição</label
                    >
                </div>
                <div class="form-check radio-input">
                    <input
                        type="radio"
                        name="apiOrderBy"
                        id="apiOrderByFOC"
                        class="form-check-input"
                    />
                    <label class="form-check-label" for="apiOrderByFOC">Data FOC</label>
                </div>
                <div class="form-check radio-input">
                    <input
                        type="radio"
                        name="apiOrderBy"
                        id="apiOrderBySale"
                        class="form-check-input"
                    />
                    <label class="form-check-label" for="apiOrderBySale"
                        >Ultimo desconto</label
                    >
                </div>
                <div class="form-check radio-input">
                    <input
                        type="radio"
                        name="apiOrderBy"
                        id="apiOrderByModDate"
                        class="form-check-input"
                    />
                    <label class="form-check-label" for="apiOrderByModDate"
                        >Data de modificação</label
                    >
                </div>
                <div class="form-check checkbox-input">
                    <input
                        type="checkbox"
                        name="apiOrderByDesc"
                        id="apiOrderByDesc"
                        class="form-check-input"
                    />
                    <label class="form-check-label" for="apiOrderByDesc"
                        >Descrescente</label
                    >
                </div>
            </div>
        `,
    },
    creators: {
        basicFilters: ``,
    },
    events: {
        basicFilters: ``,
    },
    series: {
        basicFilters: ``,
    },
    stories: {
        basicFilters: ``,
    },
};
