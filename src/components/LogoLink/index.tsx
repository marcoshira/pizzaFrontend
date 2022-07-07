import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = () => {
  return (
    <Heading size="big" uppercase>
      <Styled.Container href="/" target="_self">
        Pizzaria
      </Styled.Container>
    </Heading>
  );
};
