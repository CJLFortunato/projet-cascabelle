'use server';

import { redirect } from 'next/navigation';

const searchCatalogAction = async (formData: FormData) => {
  console.log('hello?');
  const { type, title, author } = Object.fromEntries(formData);
  redirect(`/catalogue/search?type=${type}&title=${title}&author=${author}`);
};

export default searchCatalogAction;
