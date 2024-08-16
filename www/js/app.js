async function fetchCharacterList() {
    const url = MarvelAPI.authenticateUrl(
        'https://gateway.marvel.com/v1/public/characters?limit=100'
    );

    return await MarvelAPI.callAPI(url);
}

function filterCharacterData(data) {
    return data.map((character) => ({
        id: character.id,
        name: character.name,
        description: character.description,
        image_url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    }));
}

async function cacheCharacterData() {
    try {
        const data = fetchCharacterList();
        if (!data) {
            throw new Error('Não foi possível obter a lista de personagens');
        }

        // Filtrar dados desnecessários dos personagens
        const characters = filterCharacterData(data);

        // Salvar dados em sessionStorage (NO FUTURO COOKIES)
        sessionStorage.setItem('characterList', JSON.stringify(characters));
    } catch (e) {
        alert(
            `Não foi possível obter a lista de personagens. Tente novamente mais tarde.` +
                `\nSe o problema persistir, crie uma "Issue" aqui: ` +
                `https://github.com/eduardosaraujo1/2md2-pam-marvel-api/issues`
        );
        console.error(e);
    }
}

/* 
Fetch all the characters (limit 30)
Filter the characters's data (ID, Name, description, image)
Cache characters to cookies expiring in one day
Display the characters
If user clicks "view comics", fetch all the comics that have that specific character (limit 15; characters parameter)
Filter the comics's data, having name and reference
Cache comics to cookies expiring in one day
*/
