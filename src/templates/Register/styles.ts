import styled, { css } from 'styled-components';
import { Title } from '../../components/Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${Title} {
      color: ${theme.colors.primaryColor};
      text-align: center;
      border-bottom: 2px solid ${theme.colors.secondaryColor};
    }
  `}
`;
