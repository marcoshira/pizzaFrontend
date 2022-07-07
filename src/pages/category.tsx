import Head from 'next/head';
import { canSSRAuth } from '../utils/canSSRAuth';
import { Logout } from '@styled-icons/material-outlined/Logout';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MenuLinkProps } from '../components/MenuLink';
import { Category } from '../templates/Category';

export default function Index() {
  const { signOut } = useContext(AuthContext);

  const CategoryMenuProps = [
    {
      id: '1',
      children: 'Categoria',
      link: '/category',
      newTab: false,
    },
    {
      id: '2',
      children: 'Produto',
      link: '/product',
      newTab: false,
    },
    {
      id: '3',
      children: <Logout />,
      newTab: false,
      onClick: signOut,
    },
  ] as MenuLinkProps[];

  return (
    <>
      <Head>
        <title>Categorias</title>
      </Head>
      <Category links={CategoryMenuProps} />
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
