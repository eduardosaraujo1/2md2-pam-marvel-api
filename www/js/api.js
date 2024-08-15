/*
Requisitos:
    Criar uma função para criar um hash MD5 chamada MD5()
    Criar objeto global chamado 'secrets' com o seguinte modelo:
    secrets = {
        public: '',
        private: '',
    };
*/
class API {
    // returns null if querystring is null
    static getRequestURL() {
        const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
        const queryString = API.getAuthQueryString();
        if (queryString) {
            return baseUrl + queryString;
        }
    }
    static secretsAreDefined() {
        return (
            typeof secrets === 'object' &&
            secrets['private'] != undefined &&
            secrets['public'] != undefined
        );
    }
    // returns null if api keys are null
    static getAuthQueryString() {
        if (API.secretsAreDefined()) {
            const timestamp = Date.now().toString();
            const publicKey = secrets['public'];
            const privateKey = secrets['private'];
            const hash = MD5(timestamp + privateKey + publicKey);
            return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        }
    }

    static async fetchCharacters() {
        // validar condições para API
        if (!API.secretsAreDefined()) {
            throw new Error('`secrets.js` não foi montado corretamente');
        }
        if (typeof MD5 !== 'function') {
            throw new Error('Método "MD5" não foi encontrado');
        }

        let response;
        const url = API.getRequestURL();
        try {
            response = await fetch(url);
            if (!response.ok) {
                throw new Error(
                    `${response.status}: See error code at https://developer.marvel.com/documentation/authorization`
                );
            }
        } catch (e) {
            console.error(e);
            return null;
        }

        return await response.json();
    }
}
