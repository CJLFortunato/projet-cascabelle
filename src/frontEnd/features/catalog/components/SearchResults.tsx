'use client';

import React from 'react';

import { useSearchParams } from 'next/navigation';

function SearchResults() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <div>SearchResults</div>
  );
}

export default SearchResults;
