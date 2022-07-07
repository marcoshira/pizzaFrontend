import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as Styled from './styles';

export type MenuLinkProps = {
  id?: string;
  children: ReactNode;
  link?: string;
  newTab?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuLink = ({
  children,
  link,
  newTab = false,
  onClick,
}: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Styled.Container onClick={onClick} href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
