import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '800px', padding: '1rem' }}>
      <header>
        <nav style={{ marginBottom: '2rem' }}>
          <Link href="/authors">Lista de Autores</Link> |{' '}
          <Link href="/authors/create">Criar Autor</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>Projeto CRUD - Desenvolvido com Next.js</p>
      </footer>
    </div>
  );
};

export default Layout;