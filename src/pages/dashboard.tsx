import Head from 'next/head';
import { Dashboard } from '../templates/Dashboard';
import { canSSRAuth } from '../utils/canSSRAuth';
import { Logout } from '@styled-icons/material-outlined/Logout';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MenuLinkProps } from '../components/MenuLink';
import { setupAPIClient } from '../services/api';

export type OrderProps = {
  id: string;
  name?: string;
  table: number;
  status: boolean;
  draft: boolean;
  created_at: string;
  updated_at: string;
};

export type DashboardIndexProps = {
  orderList: OrderProps[];
};

export default function Index({ orderList }: DashboardIndexProps) {
  const { signOut } = useContext(AuthContext);

  const DashboardMenuProps = [
    {
      id: '1',
      children: 'Categoria',
      link: '/category',
      newTab: false,
    },
    {
      id: '2',
      children: 'Produto',
      link: '/menu',
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
        <title>Dashboard</title>
      </Head>
      <Dashboard links={DashboardMenuProps} orderList={orderList} />
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/order');

  return {
    props: {
      orderList: response.data,
    },
  };
});
