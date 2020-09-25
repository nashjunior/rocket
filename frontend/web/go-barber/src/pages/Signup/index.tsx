import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { Container, Content, Background, AnimationContainer } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/Toast';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { push } = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatorio'),
          email: Yup.string()
            .required('Email Obrigatorio')
            .email('Digite um e-mail valido'),
          password: Yup.string().min(6, 'No minimo 6 dígitos'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);
        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso',
          description: 'Voce já pode fazer seu logon no GoBarber',
        });
        push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticaçao',
          description: 'Ocorreu um erro ao fazer cadastro. Tente novamente',
        });
      }
    },
    [addToast, push],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={Logo} alt="GoBarb" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Link to="/">
            <FiArrowLeft /> Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
