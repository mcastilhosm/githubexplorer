import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [searchRepo, setSearchRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@githubexplorer:repositories',
    );
    return (storageRepositories && JSON.parse(storageRepositories)) || [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@githubexplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!searchRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${searchRepo}`);

      const repository = response.data;

      if (
        repositories.filter((repo) => repo.full_name === repository.full_name)
          .length > 0
      ) {
        setInputError('Repositório já listado');
        return;
      }

      setRepositories([...repositories, repository]);
      setSearchRepo('');
      setInputError('');
    } catch (err) {
      if (
        'response' in err &&
        err.response &&
        'data' in err.response &&
        err.response.data &&
        'message' in err.response.data &&
        err.response.data.message
      ) {
        setInputError(err.response.data.message);
      } else {
        setInputError('Erro na busca');
      }
    }
  }

  return (
    <>
      <img src={logoImg} style={{ height: 20 }} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={searchRepo}
          onChange={(e) => setSearchRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={16} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
