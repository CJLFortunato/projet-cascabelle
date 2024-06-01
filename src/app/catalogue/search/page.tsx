import React from 'react';

import SearchResults from 'frontEnd/features/catalog/components/SearchResults';

function SearchResultsPage({ searchParams }: { searchParams: any}) {
  return (
    <main>
        <h1>Résultats de la recherche</h1>
        <SearchResults searchParams={searchParams} />
    </main>
  );
}

export default SearchResultsPage;
