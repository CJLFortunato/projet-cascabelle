import React from 'react';

import RecentlyAdded from 'frontEnd/features/catalog/components/RecentlyAdded';
import SearchForm from 'frontEnd/features/catalog/components/SearchForm';

function PageCatalog() {
  return (
    <main>
    <h1>Catalogue</h1>
    <SearchForm />
    <RecentlyAdded />
  </main>
  );
}

export default PageCatalog;
