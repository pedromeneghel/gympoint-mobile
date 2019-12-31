import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput secureTextEntry placeholder="Informe seu ID de cadastro" />
        <SubmitButton onPress={() => {}}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}