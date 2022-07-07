import Head from 'next/head';
import { canSSRAuth } from '../utils/canSSRAuth';
import { Logout } from '@styled-icons/material-outlined/Logout';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MenuLinkProps } from '../components/MenuLink';
import { Product } from '../templates/Product';
import { setupAPIClient } from '../services/api';

export type ItemProps = {
  id: string;
  name: string;
};

export type ProductIndexProps = {
  categoryList: ItemProps[];
};

export default function Index({ categoryList }: ProductIndexProps) {
  const { signOut } = useContext(AuthContext);

  const ProductMenuProps = [
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
        <title>Produtos</title>
      </Head>
      <Product links={ProductMenuProps} categoryList={categoryList} />
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/category');

  return {
    props: {
      categoryList: response.data,
    },
  };
});
