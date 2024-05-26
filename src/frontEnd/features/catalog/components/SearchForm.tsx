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
            <p>Année de publication</p>
            <label htmlFor="from_date">De</label>
            <input type="text" name="from_date" id="from_date" />
            <label htmlFor="to_date">A</label>
            <input type="text" name="to_date" id="to_date" />
            <fieldset>
              <label>
                <input type="checkbox" name="subtitles" id="subtitles" />
                {' '}
                Sous-titres
              </label>
              <label>
                <input type="checkbox" name="audiodescription" id="audiodescription" />
                {' '}
                Audiodescription
              </label>
            </fieldset>
          </section>
        )
      }
      <input type="submit" value="Rechercher" />
    </form>
  );
}

export default SearchForm;
