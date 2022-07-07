import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    /* border-left: 15px solid ${theme.colors.primaryColor}; */
    background: ${theme.colors.navy};
    height: ${theme.spacings.huge};
    border-radius: ${theme.spacings.tiny};
    transition: ${theme.transitions.fast};
    margin-bottom: ${theme.spacings.ltmedium};
    cursor: pointer;

    &:hover {
      transform: scaleY(1.15) scaleX(1.02);
    }

    span {
      font-size: ${theme.font.sizes.ltmedium};
      text-align: left;
      color: ${theme.colors.white};
    }

    div {
      position: absolute;
      left: -2px;
      top: -2px;
      border-top-left-radius: ${theme.spacings.tiny};
      border-bottom-left-radius: ${theme.spacings.tiny};
      height: calc(100% + 4px);
      width: 18px;
      background: ${theme.colors.primaryColor};
    }
  `}
`;
