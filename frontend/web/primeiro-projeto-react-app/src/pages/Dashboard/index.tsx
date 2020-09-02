import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Title, { Button, Form, Input, Repositories } from './style';
import LogoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Explorer" />
      <Title> Explore repostiorios no GitHub </Title>
      <Form>
        <Input placeholder="Digite o nome do repositorio" />
        <Button type="submit">Pesquisar</Button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg"
            alt="Address"
          />
          <div>
            <strong>RocketSeat/ Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native Forms</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
