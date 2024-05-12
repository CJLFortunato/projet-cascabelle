import React from 'react';

import RecentlyAdded from 'frontEnd/features/catalog/components/RecentlyAdded';
import SearchForm from 'frontEnd/features/catalog/components/SearchForm';
import ApiTypes from 'frontEnd/features/types/api';

async function PageCatalog() {
  const types = await ApiTypes.fetchTypes();
  return (
    <main>
    <h1>Catalogue</h1>
    <SearchForm types={types}/>
    <RecentlyAdded />
  </main>
  );
}

export default PageCatalog;
