import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { DocumentRedux } from 'common/typeDefs/catalog';

function SearchResult(props: { result: DocumentRedux}) {
  const { result } = props;
  return (
    <section className="search-result">
      <Image src={result.cover || ''} alt="couverture" width={150} height={190}/>
      <div className="search-result-ctn">
        <Link href={`/catalogue/document/${result.id}`}>
          <h3>{result.title}</h3>
        </Link>
      </div>

    </section>
  );
}

export default SearchResult;
