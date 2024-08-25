# Notas:

-   Default significa que se estiver nulo, coloque esse valor, mas preencha por padrão esse 50
-   Optional significa que o atributo deve ser ignorado se estiver vazio
-   Required significa que não pode aceitar enviar se estiver vazio
-   Sempre que o parametro Id for passado, esconda todos os filtros

# General (existe em todos)

## Geral

-   type (select) Required
-   id (int) Optional
-   limit (int) Default: 50; Range 1-100
-   offset (int) Default 0

## Filtros básicos

-   modifiedSince (Date)

# Characters

## Filtros básicos

-   name (string) Optional
    -   partial (bool) Default: true
-   orderBy
    -   Radio["Nome", "Data de modificação"] Default: Nome; Required
    -   & Checkbox[Decrescente] Default: unchecked;

## Filtros avançados

-   comics (idList) Optional
-   series (idList) Optional
-   events (idList) Optional
-   stories (idList) Optional

# Search Comics

## Filtros basicos

-   title (string) Optional
    -   partial (bool) Default: true
-   orderBy
    -   Radio[focDate, onsaleDate, title, issueNumber, modified] Default: title
    -   & Checkbox[Decrescente] Default: unchecked;

## Filtros informações comics

-   format (Select[comic, magazine, trade paperback, hardcover, digest, graphic novel, digital comic, infinite comic]) Default: comic
-   formatType (Select[comic, collection]) Default: comic
-   noVariants (Radio[Ignore, Yes, No]) Default: Ignore
-   hasDigitalIssue (Radio[Ignore, Yes, No]) Default: Ignore
-   startYear (int) Optional
-   dateDescriptor (Select[None, lastWeek, thisWeek, nextWeek, thisMonth]) Optional
-   dateRange (Date & Date) Optional

## Filtros identificadores comics

-   issueNumber (int) Optional
-   diamondCode (string) Optional
-   digitalId (int) Optional
-   upc (string) Optional
-   isbn (string) Optional
-   ean (string) Optional
-   issn (string) Optional

## Filtros avançados

-   creators (idList) Optional
-   characters (idList) Optional
-   series (idList) Optional
-   events (idList) Optional
-   stories (idList) Optional
-   sharedAppearances (idList) Optional
-   collaborators (idList) Optional

# Search Creators

## Filtros básicos

-   firstName (string) Optional
    -   partial (bool) Default: true
-   middleName (string) Optional
    -   partial (bool) Default: true
-   lastName (string) Optional
    -   partial (bool) Default: true
-   suffix (string) Optional
-   orderBy
    -   Radio[lastName, firstName, middleName, sufix(eg. Mr., Sr.), modified] Default: firstName; Required
    -   & Checkbox[Decrescente] Default: unchecked;

## Filtros avançados

-   comics (idList) Optional
-   series (idList) Optional
-   events (idList) Optional
-   stories (idList) Optional

# Search Events

## Filtros básicos

-   name (string) Optional
    -   partial (bool) Default: true
-   orderBy
    -   Radio["Nome", "Data Inicio", "Data de modificação"] Default: Nome; Required
    -   & Checkbox[Decrescente] Default: unchecked;

## Filtros avançados

-   creators (idList) Optional
-   characters (idList) Optional
-   series (idList) Optional
-   comics (idList) Optional
-   stories (idList) Optional

# Search Series

## Filtros básicos

-   title (string) Optional
    -   partial (bool) Default: true
-   orderBy
    -   Radio["Titulo", "Ano de Inicio", "Data de modificação"] Default: Titulo; Required
    -   & Checkbox[Decrescente] Default: unchecked;

## Filtros de série

-   startYear (Int) Optional
-   seriesType (Select["Ignore", "collection", "one shot", "limited", "ongoing"]) Default: Ignore
-   contains (Select[ignore, comic, magazine, trade paperback, hardcover, digest, graphic novel, digital comic, infinite comic]) Default: ignore

## Filtros avançados

-   comics (idList) Optional
-   stories (idList) Optional
-   events (idList) Optional
-   creators (idList) Optional
-   characters (idList) Optional

# Search Stories

## Filtros básicos

-   orderBy
    -   Radio["Id", "Data de modificação"] Default: Data de modificação; Required
    -   & Checkbox[Decrescente] Default: unchecked;

## Filtros avançados

-   comics (idList) Optional
-   series (idList) Optional
-   events (idList) Optional
-   creators (idList) Optional
-   characters (idList) Optional

# Misc

## Example IDs

Character: 1011334
Comic: 82970
Creator: 13970
Event: 116
Series: 31445
Story: 152
