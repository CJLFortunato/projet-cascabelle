import React from 'react';

import SearchResult from './SearchResult';
import ApiCatalog from '../api';

async function SearchResults(props: any) {
  const { searchParams } = props;

  const { title, type, author } = searchParams;

  const results = await ApiCatalog.searchCatalog({ title, type, author });

  return (
    <article className="search-result-ctn">
      {results.map((res) => <SearchResult key={res} result={res} />)}
    </article>
  );
}

export default SearchResults;
