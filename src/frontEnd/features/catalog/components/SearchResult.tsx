import React from 'react';

import Link from 'next/link';

function SearchResult(props: { result: string}) {
  const { result } = props;
  return (
    <section className="search-result">
      <Link href={`/catalogue/document/${result}`}>
        <h3>{result}</h3>
      </Link>
    </section>
  );
}

export default SearchResult;
