/*
Requisitos:
    Criar uma função para criar um hash MD5 chamada MD5()
    Colocar nas variaveis PRIVATE_KEY e PUBLIC_KEY com as chaves publicas e privadas. Coloque no arquivo secrets.js que já está no .gitignore
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
