import styled from 'styled-components';
import { darken } from 'polished';
import { TextField } from 'unform-material-ui';

import { colors } from '~/styles';

export const Container = styled.div`
  width: 100%;
`;

export const ContentTop = styled.div`
  form {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Input = styled(TextField)`
  width: 50%;

  .MuiInputBase-root {
    color: ${colors.white} !important;
    font-family: 'Saira', sans-serif;
  }

  .MuiInput-underline {
    &::after {
      border-bottom: 2px solid ${colors.secondary} !important;
    }
  }

  &:focus {
    box-shadow: 0 0 10px 1px ${darken(0.1, colors.secondary)};
  }
`;

export const ButtonAdd = styled.button`
  height: 40px;
  width: 40px;
  background-color: ${colors.darken};
  border: 2px solid ${colors.secondary};
  border-radius: 50%;
  color: ${colors.secondary};
  font-size: 1.2rem;
  margin-left: 20px;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.darken};
  }
`;

export const ContentMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
`;

export const Item = styled.li`
  > div {
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;

    button {
      height: 20px;
      width: 20px;
      background-color: ${colors.darken};
      border: 2px solid ${colors.secondary};
      border-radius: 50%;
      color: ${colors.secondary};
      font-size: 0.6rem;
      margin-left: 20px;
      transition: all 0.2s linear;

      &:hover {
        background-color: ${colors.secondary};
        color: ${colors.darken};
      }
    }
  }
`;
