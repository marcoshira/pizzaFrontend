import styled, { css } from 'styled-components';
import { Title } from '../../components/Heading/styles';
import { Wrapper as Container } from '../../components/Wrapper/styles';
import {
  Label,
  Input,
  ErrorMessage,
  InputWrapper,
} from '../../components/TextInput/styles';
import { Wrapper as Btn } from '../../components/Button/styles';

type Selected = {
  selected?: boolean;
};

const changeSelect = (theme) => css`
  color: ${theme.colors.navy};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${Container} {
      ${Title} {
        text-align: center;
        color: ${theme.colors.navy};
        margin-bottom: ${theme.spacings.xsmall};
        margin-top: 0;
      }
    }
  `}
`;

export const FormWrapper = styled.form<Selected>`
  ${({ theme, selected }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;

    select {
      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;

      margin-top: ${theme.spacings.medium};
      height: ${theme.spacings.huge};
      border: 1px solid ${theme.colors.gray3};
      border-radius: ${theme.spacings.tiny};
      font-size: ${theme.font.sizes.small};
      padding-left: ${theme.spacings.ltltmedium};
      color: ${theme.colors.gray6};

      background-image: linear-gradient(
          45deg,
          transparent 50%,
          ${theme.colors.gray7} 50%
        ),
        linear-gradient(135deg, ${theme.colors.gray7} 50%, transparent 50%),
        linear-gradient(to right, ${theme.colors.gray7}, ${theme.colors.gray7});
      background-position: calc(100% - 22px) calc(1em + 5px),
        calc(100% - 16px) calc(1em + 5px), calc(100% - 2.5em) 0.45em;
      background-size: 7px 9px, 7px 10px, 1px 2em;
      background-repeat: no-repeat;
      transition: ${theme.transitions.fast};

      &:focus {
        border: ${theme.spacings.xxtiny} solid ${theme.colors.navy};
        box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.navy};
        color: ${theme.colors.navy};
        background-image: linear-gradient(
            45deg,
            transparent 50%,
            ${theme.colors.navy} 50%
          ),
          linear-gradient(135deg, ${theme.colors.navy} 50%, transparent 50%),
          linear-gradient(to right, ${theme.colors.navy}, ${theme.colors.navy});
      }

      ${selected && changeSelect(theme)}

      option {
        transition: ${theme.transitions.fast};
      }
    }

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
      margin-bottom: ${theme.spacings.hero};
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

    #Image {
      height: ${theme.frameSizes.smallMedium};
      border: 1px solid ${theme.colors.gray3};
      border-radius: ${theme.spacings.tiny};

      input {
        opacity: 0;
        height: 100%;
        width: 100%;
        z-index: ${theme.layers.layer5};
        cursor: pointer;
      }

      ${InputWrapper} {
        height: 100%;

        > svg {
          top: 50%;
          right: 48%;
          width: 5rem;
          height: 5rem;
          color: ${theme.colors.gray7};
          z-index: ${theme.layers.normal};
          pointer-events: none;
        }

        > img {
          position: absolute;
          top: 0%;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: ${theme.layers.normal};
          object-fit: cover;
          pointer-events: none;
          border-radius: ${theme.spacings.tiny};
        }
      }
    }
  `}
`;
