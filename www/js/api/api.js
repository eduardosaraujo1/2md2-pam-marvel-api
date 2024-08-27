const MarvelAPI = (function () {
    function checkAPIDependencies(url, publicKey, privateKey) {
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

    function addAuthParameters(url, publicKey, privateKey) {
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

    return {
        call: async function (url, publicKey, privateKey) {
            // check dependencies
            checkAPIDependencies(url, publicKey, privateKey);

            // add authentication parameters to url
            const authUrl = addAuthParameters(url, publicKey, privateKey);

            // attempt request
            try {
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
                return null;
            }
        },
    };
})();

// USO EXEMPLO: const resposta = await MarvelAPI.callUrl("https://gateway.marvel.com/v1/public/characters", "e564c68db076bb8698379be85477a438", "62e3cd60de814d8957740a6dadcbabe976a2ce91")
