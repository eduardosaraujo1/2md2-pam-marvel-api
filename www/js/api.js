/*
Requisitos:
    Criar uma função para criar um hash MD5 chamada MD5()
    Criar objeto global chamado 'secrets' com o seguinte modelo:
    secrets = {
        public: '',
        private: '',
    };
*/
// returns null if querystring is null
function getRequestURL() {
    const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
    const queryString = getAuthQueryString();
    if (queryString) {
        return baseUrl + getAuthQueryString();
    }
}
function secretsAreDefined() {
    return (
        typeof secrets === 'object' &&
        secrets['private'] != undefined &&
        secrets['public'] != undefined
    );
}
// returns null if api keys are null
function getAuthQueryString() {
    if (secretsAreDefined()) {
        const timestamp = Date.now().toString();
        const publicKey = secrets['public'];
        const privateKey = secrets['private'];
        const hash = MD5(timestamp + privateKey + publicKey);
        return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    }
}

function APIConditionsValid() {
    return secretsAreDefined() && typeof MD5 === 'function';
}

async function fetchCharacters() {
    // validar condições para API
    if (!secretsAreDefined()) {
        throw new Error('Erro: secrets.js não foi montado corretamente');
    }
    if (typeof MD5 !== 'function') {
        throw new Error('Método "MD5" não foi encontrado');
    }
    const url = getRequestURL();
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(
                `${response.status}: See error code at https://developer.marvel.com/documentation/authorization`
            );
        }
    } catch (e) {
        console.error(e);
        return null;
    }
}
