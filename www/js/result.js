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

    // add loader icon to container (wip)
    const loader = document.createElement('div');
    loader.classList.add('loader');
    container.appendChild(loader);

    // scroll
    swipe(2);

    // get url and display it
    const formData = formReader.read();
    const url = generateAPIUrl(formData);
    document.getElementById('generatedUrl').innerHTML = url;

    // TODO: implement config screen to get and set pub and priv key
    // make request
    const result = await MarvelAPI.call(url, publicKey(), privateKey());

    // remove loader and draw result
    container.innerHTML = '';
    jsonTree.create(result, container);
}
