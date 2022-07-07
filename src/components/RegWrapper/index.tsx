import * as Styled from './styles';

export type RegWrapperProps = {
  children: React.ReactNode;
};

export function RegWrapper({ children }: RegWrapperProps) {
  return <Styled.RegWrapper>{children}</Styled.RegWrapper>;
}
