'use client';

import React, { useState } from 'react';

import { SearchFormProps } from './propTypes';

function SearchForm(props: SearchFormProps) {
  const { types } = props;
  const [displayAdvanced, setDisplayAdvanced] = useState<boolean>(false);
  console.log(types);
  return (
    <form>
      <select name="type" id="type">
        <option value="">Choisissez un type de document</option>
        {
          types.map((type) => <option value={type.id} key={type.id}>{type.label}</option>)
        }
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
