'use client';

import React, { useState } from 'react';

import { SearchFormProps } from './propTypes';
import searchCatalogAction from '../actions';

function SearchForm(props: SearchFormProps) {
  const { types } = props;

  const [displayAdvanced, setDisplayAdvanced] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    type: 0,
    title: '',
    author: '',
  });

  const handleChange = (e: any) => {
    const { target: { name, value } } = e;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form action={searchCatalogAction}>
      <select name="type" id="type"onChange={handleChange} value={formData.type}>
        <option value="">Choisissez un type de document</option>
        {
          types.map((type) => <option value={type.id} key={type.id}>{type.label}</option>)
        }
      </select>
      <label htmlFor="title">Titre</label>
      <input type="text" id="title" onChange={handleChange} value={formData.title} name="title" />
      <button onClick={(e) => {
        e.preventDefault();
        setDisplayAdvanced(!displayAdvanced);
      }}>Recherche avancée</button>
      {
        displayAdvanced && (
          <section>
            <label htmlFor="author">Auteur</label>
            <input
              type="text"
              id="author"
              onChange={handleChange}
              value={formData.author}
              name="author"
            />
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
