ALL LIMITS BETWEEN 1 AND 100

# Search Characters

-   id (int)
-   nameStartsWith (string) [Ignore if blank or whitespace]
-   limit (int) [Set 50 if null or whitespace]
-   orderBy (string Radio["Nome", "Data de modificação"] & Radio["Crescente", "Decrescente"]) [REQUIRED DEFAULT NOME CRESCENTE]

# Search Comics

-   id (int)
-   titleStartsWith (string) [Ignore if blank or whitespace]
-   format (Select[comic, magazine, trade paperback, hardcover, digest, graphic novel, digital comic, infinite comic])
-   limit (int) [Set 50 if null or whitespace]
-   orderBy (string Radio["Titulo", "Número", "Data de modificação"] & Radio["Crescente", "Decrescente"]) [REQUIRED DEFAULT NOME CRESCENTE]

# Search Creators

-   id (int)
-   nameStartsWith (string) [Ignore if blank or whitespace]
-   limit (int) [Set 50 if null or whitespace]
-   orderBy (string Radio["Nome", "Data de modificação"] & Radio["Crescente", "Decrescente"]) [REQUIRED DEFAULT Primeiro Nome CRESCENTE]

# Search Events

-   id (int)
-   nameStartsWith (string) [Ignore if blank or whitespace]
-   limit (int) [Set 50 if null or whitespace]
-   orderBy (string Radio["Nome", "Data Inicio", "Data de modificação"] & Radio["Crescente", "Decrescente"]) [REQUIRED DEFAULT Primeiro Nome CRESCENTE]

# Search Series

-   id (int)
-   titleStartsWith (string) [Ignore if blank or whitespace]
-   seriesType (Select["collection", "one shot", "limited", "ongoing"])
-   limit (int) [Set 50 if null or whitespace]
-   orderBy (string Radio["Titulo", "Número", "Data de modificação"] & Radio["Crescente", "Decrescente"]) [REQUIRED DEFAULT NOME CRESCENTE]

# Search Stories

-   id (int)
-   orderBy (string Radio["Id", "Data de modificação"] & Radio["Crescente", "Decrescente"]) [REQUIRED DEFAULT ID CRESCENTE]
-   limit (int) [Set 50 if null or whitespace] [1-100]
