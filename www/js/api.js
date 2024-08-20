// TODO: Fazer a função callAPI usar como parametros chave publica chave primaria e url
// TODO: Limpar codebase, usando código do chatgpt como referencia
/* 
// Função para fazer a chamada à Marvel API
async function fetchMarvelAPI(url, publicKey, privateKey) {
    // Captura o timestamp atual para ser usado na criação do hash
    const ts = new Date().getTime();

    // Concatena o timestamp, chave privada e chave pública para criar a string que será "hashada"
    const stringToHash = ts + privateKey + publicKey;

    // Usa a função MD5 para criar o hash necessário para autenticação
    const hash = MD5(stringToHash);

    // Monta a URL final, adicionando os parâmetros necessários (ts, chave pública, e hash)
    const finalUrl = `${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    try {
        // Realiza a chamada HTTP à URL final usando o método fetch, que retorna uma Promise
        const response = await fetch(finalUrl);

        // Verifica se a resposta é válida (código HTTP 200)
        if (response.ok) {
            // Converte a resposta em JSON
            const jsonResponse = await response.json();
            // Retorna a resposta JSON como uma string
            return JSON.stringify(jsonResponse);
        } else {
            // Se a resposta não for válida, retorna uma string vazia
            return "";
        }
    } catch (error) {
        // Se ocorrer um erro durante a chamada à API, retorna uma string vazia
        return "";
    }
}

// Exemplo de uso da função:
// fetchMarvelAPI('https://gateway.marvel.com/v1/public/characters', 'suaPublicKey', 'suaPrivateKey')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
*/
class MarvelAPI {
    static authenticateUrl(url) {
        if (!this._checkDependencies()) {
            return null;
        }

        const authString = this._getAuthString();
        const urlObj = new URL(url);

        // Check if the URL already has parameters
        if (urlObj.search) {
            // URL already has parameters, so add the authString with &
            if (url.endsWith('&')) {
                // If the URL ends with &, just append the authString
                return url + authString;
            }
            // Otherwise, add the authString with &
            return url + '&' + authString;
        } else {
            // URL does not have parameters, so add the authString with ?
            return url + '?' + authString;
        }
    }

    static async callAPI(url) {
        if (!this._checkDependencies()) {
            return null;
        }

        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `${response.status} (${response.statusText}): See error code at https://developer.marvel.com/documentation/authorization`
            );
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    static _foundAPIKeys() {
        return (
            typeof PRIVATE_KEY === 'string' && typeof PUBLIC_KEY === 'string'
        );
    }
    // returns null if api keys are null
    static _getAuthString() {
        if (this._foundAPIKeys()) {
            const timestamp = Date.now().toString();
            const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
            return `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
        }
    }
    static _checkDependencies() {
        if (!this._foundAPIKeys()) {
            console.error(
                'API Dependency fail: Could not find API one or more api key(s)'
            );
            return false;
        }
        if (typeof MD5 !== 'function') {
            console.error(
                "API Dependency fail: Function 'MD5' not found. Cannot generate authentication hash"
            );
            return false;
        }
        return true;
    }
}
