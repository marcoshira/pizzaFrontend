import { OrderItemsProps } from '../../templates/Dashboard';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import Modal from 'react-modal';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { theme } from '../../styles/theme';

export type ModalOrderProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemsProps[];
  handleFinishModal: (id: string) => void;
  loading: boolean;
};
export const ModalOrder = ({
  isOpen,
  onRequestClose,
  order,
  handleFinishModal,
  loading,
}: ModalOrderProps) => {
  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.colors.navy,
      color: theme.colors.white,
      padding: '0',
    },
  };

  return (
    <Modal
      id="Modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <Styled.Wrapper>
        <Styled.Button onClick={onRequestClose} className="react-modal-close">
          <CloseIcon aria-label="Close Menu" />
        </Styled.Button>
        <Styled.TitleWrapper>
          <Heading size="medium">Detalhes do Pedido:</Heading>
          <span>Mesa: {order[0].order.table}</span>
        </Styled.TitleWrapper>
        <Styled.ItemsContainer>
          {order.map((item) => {
            return (
              <Styled.Item key={item.id}>
                {item.amount} - {item.product.name}
              </Styled.Item>
            );
          })}
          <Styled.Total>
            <Heading size="small">Total:</Heading>
            <p>R$: 38.99</p>
          </Styled.Total>
          <Button
            onClick={() => handleFinishModal(order[0].order_id)}
            disabled={loading}
          >
            Concluir Pedido
          </Button>
        </Styled.ItemsContainer>
      </Styled.Wrapper>
    </Modal>
  );
};
