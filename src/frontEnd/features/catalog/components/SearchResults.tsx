import React from 'react';

import { DocumentRedux } from 'common/typeDefs/catalog';

import SearchResult from './SearchResult';
import ApiCatalog from '../api';

async function SearchResults(props: any) {
  const { searchParams } = props;

  const { title, type, author } = searchParams;

  const results: DocumentRedux[] = await ApiCatalog.searchCatalog({ title, type, author });

  return (
    <article className="search-result-ctn">
      {results.map((res) => <SearchResult key={res.id} result={res} />)}
    </article>
  );
}

export default SearchResults;
