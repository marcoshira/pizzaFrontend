import React, { KeyboardEventHandler, useState } from 'react';
import { TextInput } from '../TextInput';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import * as Styled from './styles';
import { Button } from '../Button';
import Link from 'next/link';

export type FormLoginProps = {
  onLogin?: (email: string, password: string) => Promise<void>;
};

export const FormLogin = ({ onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (onLogin) {
      if (email === '' || password === '') {
        setError('Please fill in all fields.');
        setLoading(false);
        return;
      }
      await onLogin(email, password);
    }
    setLoading(false);
    setError('Invalid Email or Password.');
  };

  return (
    <Styled.Wrapper>
      <TextInput
        name="user-identifier"
        label="Email"
        onInputChange={(val) => setEmail(val)}
        value={email}
        icon={<Email />}
        type="email"
        errorMessage={error ? ' ' : null}
      />
      <TextInput
        name="user-password"
        label="Password"
        onInputChange={(val) => setPassword(val)}
        value={password}
        icon={<Password />}
        type="password"
        errorMessage={error}
      />
      <Styled.ButtonWrapper>
        <Button disabled={loading} type="submit" onClick={handleSubmit}>
          {loading ? 'Logging In' : 'Log In'}
        </Button>

        <Link href="/register">
          <a>
            <Button>Register</Button>
          </a>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};
