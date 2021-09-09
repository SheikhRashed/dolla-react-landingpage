import React from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to Your Account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' placeholder='Your Email'></FormInput>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput
                type='password'
                placeholder='Your Password'
                required
              ></FormInput>

              <FormButton>Submit</FormButton>
              <Text>Forget Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
