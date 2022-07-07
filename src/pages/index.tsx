import Head from 'next/head';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Home } from '../templates/Home';
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Index() {
  const { signIn } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Pizzaria MMH</title>
      </Head>
      <Home onLogin={signIn} />
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
