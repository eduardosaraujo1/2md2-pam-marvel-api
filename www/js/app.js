async function loadTree() {
    const container = document.querySelector(".result-container");
    let url = "https://gateway.marvel.com";
    switch (document.querySelector("#paramType").value) {
        case "characters": url += "/v1/public/characters"
    }
    const limit = document.querySelector("#paramLimit").value;
    const offset = document.querySelector("#paramOffset").value;
    const partName = document.querySelector("#paramNameStartsWith").value;

    const oUrl = new URL(url);
    oUrl.searchParams.set("limit", limit)
    oUrl.searchParams.set("offset", offset)
    oUrl.searchParams.set("nameStartsWith", partName)

    const response = await MarvelAPI.callUrl(oUrl.toString(), "e564c68db076bb8698379be85477a438", "62e3cd60de814d8957740a6dadcbabe976a2ce91")
    jsonTree.create(response, container);
}

const executeButton = document.querySelector("#btnExecutar");
executeButton.addEventListener("click", loadTree);