import React from 'react';

import Link from 'next/link';

function Header() {
  return (
    <header>
      <p>Projet Cascabelle</p>
      <nav>
        <Link href="/catalogue">Catalogue</Link>
      </nav>
    </header>
  );
}

export default Header;
