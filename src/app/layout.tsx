import type { Metadata } from 'next';
import React from 'react';

import { Inter } from 'next/font/google';

import Header from 'frontEnd/components/Header';
import './style.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'projet cascabelle',
  description: 'Réseau de gestion de bibliothèque',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
