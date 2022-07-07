import React, { useState } from 'react';
import { TextInput } from '../TextInput';
import { Person } from '@styled-icons/material-outlined/Person';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import * as Styled from './styles';
import { Button } from '../Button';

export type FormRegisterProps = {
  onRegister?: (name: string, email: string, password: string) => Promise<void>;
};

export const FormRegister = ({ onRegister }: FormRegisterProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (onRegister) {
      if (email === '' || password === '' || name === '') {
        setError('Please fill in all fields.');
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        setLoading(false);
        return;
      }
      await onRegister(name, email, password);
    }
    setLoading(false);
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <TextInput
        name="user-name"
        label="Name"
        onInputChange={(val) => setName(val)}
        value={name}
        icon={<Person />}
        type="text"
        errorMessage={error ? ' ' : null}
      />
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
        errorMessage={error ? ' ' : null}
      />
      <TextInput
        name="user-confirm-password"
        label="Confirm Password"
        onInputChange={(val) => setConfirmPassword(val)}
        value={confirmPassword}
        icon={<Password />}
        type="password"
        errorMessage={error}
      />

      <Styled.ButtonWrapper>
        <Button disabled={loading}>{loading ? 'Loading' : 'Register'}</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};
