import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '../services/api';

interface Author {
  id: number;
  name: string;
  bio: string;
}

const Authors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    api.get('/authors').then((response) => {
      setAuthors(response.data); // Atualiza os autores
    });
  }, []);

  return (
    <div>
      <h1>Lista de Autores</h1>
      <Link href="/authors/create">Criar Novo Autor</Link>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link href={`/authors/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;