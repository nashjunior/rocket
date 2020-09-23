import React, { useCallback, useContext, useRef } from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Form } from '@unform/web';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { AuthContext } from '../../context/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { user, signIn } = useContext(AuthContext);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatorio')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha Obrigatoria'),
        });

        await schema.validate(data, { abortEarly: false });
        signIn({ email: data.email, password: data.password });
      } catch (error) {
        formRef.current?.setErrors(getValidationErrors(error));
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarb" />
        <Form ref={formRef} onSubmit={handleSubmit} action="">
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
