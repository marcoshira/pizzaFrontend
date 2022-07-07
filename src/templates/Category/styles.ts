import styled, { css } from 'styled-components';
import { Title } from '../../components/Heading/styles';
import { Wrapper as Container } from '../../components/Wrapper/styles';
import { Label, Input, ErrorMessage } from '../../components/TextInput/styles';
import { Wrapper as Btn } from '../../components/Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${Container} {
      ${Title} {
        text-align: center;
        color: ${theme.colors.navy};
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`;

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;

    ${ErrorMessage} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${Input} {
      &:focus {
        border: ${theme.spacings.xxtiny} solid ${theme.colors.navy};
        box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.navy};
      }
      &:focus
        + ${Label},
        &:not(:placeholder-shown)
        + ${Label},
        &:-webkit-autofill
        + ${Label} {
        background: ${theme.colors.navy};
      }
    }

    ${Btn} {
      margin-top: ${theme.spacings.small};
      a {
        text-decoration: none;
        color: ${theme.colors.white};
      }
      width: 100%;
      border: 2px solid ${theme.colors.navy};
      background: ${theme.colors.white};
      color: ${theme.colors.navy};
      border-radius: ${theme.spacings.tiny};
      margin-left: 0;
      &:hover {
        border: 2px solid ${theme.colors.primaryColor};
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
    }
  `}
`;
