import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo } from './styles';

import LogoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={LogoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          Voltar
          <FiChevronLeft size={16} />
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg"
            alt="RocketSeat"
          />
          <div>
            <strong>RocketSeat/unform</strong>
            <p>Descricao do repositorio</p>
          </div>
          <ul>
            <li>
              <strong>1808</strong>
              <span>stars</span>
            </li>
            <li>
              <strong>48</strong>
              <span>forks</span>
            </li>
            <li>
              <strong>67</strong>
              <span>issues</span>
            </li>
          </ul>
        </header>
      </RepositoryInfo>

      <Issues>
        <Link to="aosu">
          <div>
            <strong>aiosufh</strong>
            <p>oasuh</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
