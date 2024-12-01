import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';

const EditAuthor = () => {
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (id) {
      api.get(`/authors/${id}`).then((response) => {
        setName(response.data.name);
        setBio(response.data.bio);
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/authors/${id}`, { name, bio });
      router.push('/authors'); // Redireciona para a lista de autores
    } catch (error) {
      console.error('Erro ao editar autor:', error);
    }
  };

  return (
    <div>
      <h1>Editar Autor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditAuthor;
