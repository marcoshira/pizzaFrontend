import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Wrapper as Btn } from '../Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.frameSizes.large};
    padding: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xxsmall};

    @media ${theme.media.lteOrEqMedium} {
      width: ${theme.frameSizes.largeMedium};
    }

    @media ${theme.media.lteOrEqSmall} {
      width: 100vw;
    }

    @media ${theme.media.lteSmall} {
      width: 100vw;
      height: 55vh;
    }
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
    ${Title} {
      margin-top: 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.navy};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.fast};
    cursor: pointer;
    > svg {
      width: 3rem;
      height: 3rem;
      border: 1px solid ${theme.colors.primaryColor};
    }

    &:hover {
      transform: scale(1.05);
      background: ${theme.colors.navy};
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const ItemsContainer = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};

    ${Btn} {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 35%;
      border: 2px solid ${theme.colors.primaryColor};
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.navy};
      border-radius: ${theme.spacings.tiny};
      transition: ${theme.transitions.fast};
      margin-left: 0;
      &:hover {
        background: ${theme.colors.navy};
        color: ${theme.colors.primaryColor};
      }
      &::after {
        height: 0;
      }
      &:disabled {
        background: ${theme.colors.grey};
        color: ${theme.colors.white};
        border: 2px solid ${theme.colors.grey};

        &:hover {
          background: ${theme.colors.grey};
          color: ${theme.colors.white};
          border: 2px solid ${theme.colors.grey};
          cursor: not-allowed;
        }

        &::after {
          content: none;
        }
      }

      @media ${theme.media.lteSmall} {
        width: 88%;
        right: auto;
      }
    }
  `}
`;

export const Item = styled.p``;

export const Total = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    ${Title} {
      margin: 0;
    }

    p {
      margin-left: ${theme.spacings.small};
      margin-top: ${theme.spacings.ltlarge};
    }
  `}
`;
