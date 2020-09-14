import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarb" />
        <form action="">
          <h1>Faca Seu logon</h1>
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

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha Senha</a>
        </form>

        <a href="">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
