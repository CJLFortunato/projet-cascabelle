import React from 'react';

function SingleDocumentPage({ params }: { params: any }) {
  const { id } = params;
  return (
    <main>
      <h1>{id}</h1>
    </main>
  );
}

export default SingleDocumentPage;
