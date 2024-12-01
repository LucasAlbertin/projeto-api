import { useState } from 'react';
import api from '../services/api';
import { useRouter } from 'next/router';

const CreateAuthor = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/authors', { name, bio });
      router.push('/authors'); // Redireciona para a lista de autores
    } catch (error) {
      console.error('Erro ao criar autor:', error);
    }
  };

  return (
    <div>
      <h1>Criar Autor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Biografia"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CreateAuthor;