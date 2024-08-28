const MarvelAPI = (function () {
    /**
     * Important: ALLOWS AN EMPTY KEY
     */
    function validateKey(key) {
        // regex valida apenas que contem caracteres de hexadecimal
        key = key || '';
        const hexPattern = /^[0-9a-f]*$/;
        return hexPattern.test(key);
    }
    function validateUrl(url) {
        return !url || !url.includes('gateway.marvel.com');
    }
    function checkAPIDependencies(url, publicKey, privateKey) {
        function handleError(message) {
            console.error(message);
            return message;
        }

        if (typeof MD5 !== 'function') {
            return handleError(
                "[API Dependency fail] Function 'MD5' not found"
            );
        }

        if (validateUrl(url)) {
            return handleError(`[API Dependency fail] Invalid URL: ${url}`);
        }

        if (!publicKey || !validateKey(publicKey)) {
            return handleError(
                `[API Dependency fail] Invalid public key: ${publicKey}`
            );
        }

        if (!validateKey(privateKey)) {
            return handleError(`[API Dependency fail] Null private key`);
        }

        return 'valid';
    }

    function addAuthParameters(url, publicKey, privateKey) {
        if (!url) return '';
        if (!publicKey) return url;
        const urlObject = new URL(url);
        const urlParams = urlObject.searchParams;

        // Public params
        urlParams.set('apikey', publicKey);

        // Private params
        if (privateKey) {
            const ts = Date.now().toString();
            const hash = MD5(ts + privateKey + publicKey);
            urlParams.set('ts', ts);
            urlParams.set('hash', hash);
        }

        return urlObject.toString();
    }
    /**
     *
     * @param {string} url API Url. Must include prefix (required)
     * @param {string} publicKey Public key for the API (required)
     * @param {string} privateKey Private key for the API (optional)
     * @returns
     */
    return {
        call: async (url, publicKey, privateKey) => {
            // check dependencies
            const check = checkAPIDependencies(url, publicKey, privateKey);
            if (check !== 'valid') {
                return {
                    code: -1,
                    message: check,
                };
            }

            // add authentication parameters to url
            const authUrl = addAuthParameters(url, publicKey, privateKey);

            // attempt request
            try {
                // TODO: Make a way to cancel request if another is made
                const r = await fetch(authUrl);
                const rJSON = await r.json();
                return rJSON;
                // if (r.ok) {
                //     return rJSON;
                // } else {
                //     // handle errors
                //     throw new Error(
                //         `[Marvel API Error] Code: ${rJSON.code} \nMessage: ${rJSON.status}.
                //     \nFor more information see https://developer.marvel.com/documentation/authorization`
                // );
                // }
            } catch (e) {
                console.error(e);
                return {
                    code: 0,
                    status: e.message,
                };
            }
        },
    };
})();
