import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';

import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargarzers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setissues] = useState<Issue[]>([]);

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((response) => setRepository(response.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then((response) => setRepository(response.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={LogoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          Voltar
          <FiChevronLeft size={16} />
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <ul>
              <li>
                <strong>{repository.stargarzers_count}</strong>
                <span>stars</span>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <span>forks</span>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>issues</span>
              </li>
            </ul>
          </header>
        </RepositoryInfo>
      )}
      )}
      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} to={issue.html_url} target="_blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
