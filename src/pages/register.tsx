import Head from 'next/head';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Register } from '../templates/Register';

export default function Index() {
  const { signUp } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Pizzaria MMH</title>
      </Head>
      <Register onRegister={signUp} />
    </>
  );
}
