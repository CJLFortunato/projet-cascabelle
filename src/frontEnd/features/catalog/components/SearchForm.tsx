'use client';

import React, { useState } from 'react';

function SearchForm() {
  const [displayAdvanced, setDisplayAdvanced] = useState<boolean>(false);
  React.useEffect(() => {
    console.log(displayAdvanced);
  }, [displayAdvanced]);
  console.log('render');
  return (
    <form>
      <select name="type" id="type">
        <option value="test">test</option>
      </select>
      <label htmlFor="title">Titre</label>
      <input type="text" id="title" />
      <button onClick={(e) => {
        e.preventDefault();
        setDisplayAdvanced(!displayAdvanced);
      }}>Recherche avancée</button>
      {
        displayAdvanced && (
          <section>
            <label htmlFor="author">Auteur</label>
            <input type="text" id="author" />
          </section>
        )
      }
      <input type="submit" value="Rechercher" />
    </form>
  );
}

export default SearchForm;
