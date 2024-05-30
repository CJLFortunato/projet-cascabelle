'use client';

import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import SearchResult from './SearchResult';
import ApiCatalog from '../api';

function SearchResults() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '';
  const type = searchParams.get('type') || '';
  const author = searchParams.get('author') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const results = await ApiCatalog.searchCatalog({ title, type, author });
      setSearchResults(results);
    };
    callApi();
  }, [setSearchResults, title, type, author]);

  return (
    <article className="search-result-ctn">
      {searchResults.map((res) => <SearchResult key={res} result={res} />)}
    </article>
  );
}

export default SearchResults;
