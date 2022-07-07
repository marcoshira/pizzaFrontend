import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';
import { NavLinksProps } from '../../components/NavLinks';
import { Refresh } from '@styled-icons/material-outlined/Refresh';
import * as Styled from './styles';
import { Wrapper } from '../../components/Wrapper';
import { OrderItem } from '../../components/OrderItem';
import { DashboardIndexProps, OrderProps } from '../../pages/dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import { setupAPIClient } from '../../services/api';
import { ModalOrder } from '../../components/ModalOrder';

export type OrderItemsProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  };
  order: OrderProps;
};

export function Dashboard({
  links = [],
  orderList = [],
}: NavLinksProps & DashboardIndexProps) {
  const [orders, setOrders] = useState(orderList);
  const [modalItem, setModalItem] = useState<OrderItemsProps[]>();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async (id) => {
    const apiClient = setupAPIClient();
    const response = await apiClient.get('/order/item', {
      params: {
        order_id: id,
      },
    });

    setModalItem(response.data);
    setModalVisible(true);
  };

  const handleRefresh = async () => {
    const apiClient = setupAPIClient();
    const response = await apiClient.get('/order');

    setOrders(response.data);
  };

  const handleFinishModal = async (id: string) => {
    setLoading(true);
    const apiClient = setupAPIClient();

    await apiClient.put('/order/close', {
      order_id: id,
    });

    const response = await apiClient.get('/order');

    setOrders(response.data);
    setModalVisible(false);
    setLoading(false);
  };

  Modal.setAppElement('#__next');

  return (
    <Styled.Wrapper>
      <Menu links={links} />
      <Wrapper>
        <Styled.HeadingContainer>
          <Heading size="medium">Últimos pedidos</Heading>
          <Styled.Button onClick={handleRefresh}>
            <Refresh />
          </Styled.Button>
        </Styled.HeadingContainer>
        <Styled.Container>
          {orders.length === 0 && <span>Nenhum pedido aberto.</span>}
          {orders.map((item, index) => {
            return (
              <OrderItem
                key={index}
                table={item.table}
                onClick={() => handleClick(item.id)}
              />
            );
          })}
        </Styled.Container>
      </Wrapper>

      {modalVisible && (
        <ModalOrder
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          order={modalItem}
          handleFinishModal={handleFinishModal}
          loading={loading}
        />
      )}
    </Styled.Wrapper>
  );
}
