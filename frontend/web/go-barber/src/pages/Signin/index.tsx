import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Form } from '@unform/web';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email Obrigatorio')
          .email('Digite um e-mail valido'),
        password: Yup.string().min(6, 'No minimo 6 dígitos'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      formRef.current?.setErrors(getValidationErrors(error));
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarb" />
        <Form onSubmit={handleSubmit} action="">
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
        </Form>

        <a href="">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
