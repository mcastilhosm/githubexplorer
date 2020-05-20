import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  name: string;
}

const Repository: React.FC = () => {
  const { name } = useParams<RepositoryParams>();

  console.log(name);

  return (
    <>
      <Header>
        <img src={logoImg} style={{ height: 20 }} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="Matheus Castilhos"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdasd">
          <div>
            <strong>wdasdas</strong>
            <p>sadwdwd</p>
          </div>

          <FiChevronRight size={16} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
