import React, { useCallback, useContext, useRef } from 'react';
import { Container, Content, Background, AnimationContainer } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Form } from '@unform/web';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import { Link } from 'react-router-dom';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { user, signIn } = useAuth();
  const { addToast, removeToast } = useToast();

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
        await signIn({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticaçao',
          description: 'Ocorreu um erro ao fazer login cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
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

          <Link to="/signup">
            <FiLogIn /> Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
