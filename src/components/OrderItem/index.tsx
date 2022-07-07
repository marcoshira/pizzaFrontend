import * as Styled from './styles';

export type OrderItemProps = {
  table?: number;
  onClick?: () => void;
};
export const OrderItem = ({ table, onClick }: OrderItemProps) => {
  return (
    <Styled.Wrapper onClick={onClick}>
      <div></div>
      <span>Mesa {table}</span>
    </Styled.Wrapper>
  );
};
