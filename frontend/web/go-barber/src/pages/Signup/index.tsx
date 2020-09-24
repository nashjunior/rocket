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
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
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
    } catch (error) {
      formRef.current?.setErrors(getValidationErrors(error));
    }
  }, []);

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
