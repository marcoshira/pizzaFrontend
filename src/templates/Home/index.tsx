import { FormLogin, FormLoginProps } from '../../components/FormLogin';
import { Heading } from '../../components/Heading';
import { Wrapper } from '../../components/Wrapper';
import * as Styled from './styles';

export type HomeProps = FormLoginProps;

export function Home({ onLogin }: HomeProps) {
  return (
    <Styled.Wrapper>
      <Wrapper>
        <Heading size="huge">Pizzaria</Heading>
        <FormLogin onLogin={onLogin} />
      </Wrapper>
    </Styled.Wrapper>
  );
}
