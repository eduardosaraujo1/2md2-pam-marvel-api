class MarvelAPI {
    static async callUrl(url, publicKey, privateKey) {
        // check dependencies
        this._checkAPIDependencies(url, publicKey, privateKey);

        // add authentication parameters to url
        const authUrl = this._addAuthParameters(url, publicKey, privateKey);

        // attempt request
        try {
            const r = await fetch(authUrl);
            const rJSON = await r.json();
            if (r.ok) {
                return rJSON;
            } else {
                // handle errors
                throw new Error(
                    `[Marvel API Error] Code: ${rJSON.code} \nMessage: ${rJSON.message}. 
                    \nFor more information see https://developer.marvel.com/documentation/authorization`
                );
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    static _checkAPIDependencies(url, publicKey, privateKey) {
        if (typeof MD5 !== 'function') {
            console.error("[API Dependency fail] Function 'MD5' not found");
            return null;
        }

        // url must be from gateway.marvel.com
        if (!url || !url.includes('gateway.marvel.com')) {
            console.error(`[API Dependency fail] Invalid URL: ${url}`);
            return null;
        }

        if (!publicKey) {
            console.error(`[API Dependency fail] Null public key`);
            return null;
        }

        if (!privateKey) {
            console.error(`[API Dependency fail] Null private key`);
            return null;
        }
    }

    static _addAuthParameters(url, publicKey, privateKey) {
        // Get authentication data
        const ts = Date.now().toString();
        const apikey = publicKey;
        const hash = MD5(ts + privateKey + publicKey);

        // build URL
        const urlObject = new URL(url);
        const urlParams = urlObject.searchParams;
        urlParams.set('ts', ts);
        urlParams.set('apikey', apikey);
        urlParams.set('hash', hash);

        return urlObject.toString();
    }
}
