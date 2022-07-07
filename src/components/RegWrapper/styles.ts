import styled, { css } from 'styled-components';

export const RegWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 0rem auto;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xlarge};
    height: 100vh;

    @media ${theme.media.lteSmall} {
      padding: ${theme.spacings.small};
      margin: 3rem auto;
    }
  `}
`;
