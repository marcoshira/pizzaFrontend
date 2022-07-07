import { FormRegister, FormRegisterProps } from '../../components/FormRegister';
import { Heading } from '../../components/Heading';
import { RegWrapper } from '../../components/RegWrapper';
import * as Styled from './styles';

export function Register({ onRegister }: FormRegisterProps) {
  return (
    <Styled.Wrapper>
      <RegWrapper>
        <Heading size="huge">Pizzaria</Heading>
        <FormRegister onRegister={onRegister} />
      </RegWrapper>
    </Styled.Wrapper>
  );
}
