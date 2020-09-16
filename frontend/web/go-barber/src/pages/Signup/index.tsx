import React from 'react';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signup: React.FC = () => {
  function handleSubmit(data: object): void {}

  return (
    <Container>
      <Background />

      <Content>
        <img src={Logo} alt="GoBarb" />
        <Form onSubmit={handleSubmit}>
          <h1>Faca Seu cadastro</h1>
          <Input
            icon={FiUser}
            type="text"
            name="user"
            id=""
            placeholder="Nome"
          />
          <Input
            icon={FiMail}
            type="email"
            name="email"
            id=""
            placeholder="E-mail"
          />
          <Input
            icon={FiLock}
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
