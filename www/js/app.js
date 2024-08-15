const CACHE_CHARACTERS_NAME = 'cacheCharacters';
function cacheCharacterData() {
    // TODO: Implementar um sistema de Cache para não demorar 50 segundos para pegar os dados
    const data = API.fetchCharacters();
    const results = data['data']['results'];
    const reducedResults = results.reduce((array, current) => {
        const name = current['name'];
        const description = current['description'];
        const image =
            current['thumbnail']['path'] +
            '.' +
            current['thumbnail']['extension'];
        array.push(current);
    }, []);
    sessionStorage.setItem(
        CACHE_CHARACTERS_NAME,
        JSON.stringify(reducedResults)
    );
}
