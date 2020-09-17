import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainterProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainterProps>`
  background: #232129;
  border-radius: 10px;
  color: #666360;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}


  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    visibility: hidden;
  }

  &::before {
    border-color: #c53030 transparent;
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
