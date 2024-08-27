/**
 *
 * @param {object} data Data for the API, usually obtained through formReader.read()
 */
function generateAPIUrl(data) {
    if (!data.requestType) {
        console.error('Invalid data for the API');
        return null;
    }
    const url = new URL('https://gateway.marvel.com/v1/public');
    url.pathname += '/' + data.requestType;
    url.pathname += data.id ? `/${data.id}` : '';

    // leave only the extra parameters
    delete data.requestType;
    delete data.id;

    for (const reg in data) {
        url.searchParams.set(reg, data[reg]);
    }
    console.debug(`url: ${url.toString()}`);
    console.debug(data);
    return url.toString();
}

async function requestBtnOnClick(event) {
    // form validation
    const form = document.querySelector('form#api-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // clear container
    const container = document.querySelector('.result-container');
    container.innerHTML = '';

    // TODO: FINISH THIS
    // add loader icon to container (wip)

    // scroll
    swipe(2);

    // make request
    const formData = formReader.read();
    const url = generateAPIUrl(formData);
    const result = await MarvelAPI.call(url, PUBLIC_KEY, PRIVATE_KEY);

    // draw result
    if (result != null) {
        jsonTree.create(result, container);
    } else {
        console.log('Coult not contact MarvelAPI');
        // TODO: Display an error message on the container
    }
}

function debug() {
    return generateAPIUrl(formReader.read());
}
