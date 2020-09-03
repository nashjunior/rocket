import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import Title, { Button, Error, Form, Input, Repositories } from './style';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      `@GithubExplorer:repositories`,
    );
    return storageRepositories ? JSON.parse(storageRepositories) : [];
  });
  const [inputError, setInputError] = useState(``);
  const [newRepo, setNewRepo] = useState(``);

  useEffect(() => {
    localStorage.setItem(
      `@GithubExplorer:repositories`,
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError(`Digite o autor/nome do repositorio`);
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo(``);
      setInputError(``);
    } catch (error) {
      setInputError(`Erro na busca por esse repositorio`);
    }
  }

  return (
    <>
      <img src={LogoImg} alt="Github Explorer" />
      <Title> Explore repostiorios no GitHub </Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <Input
          placeholder="Digite o nome do repositorio"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            to={`repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
