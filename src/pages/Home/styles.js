import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from '~/styles';

export const Container = styled.div`
  width: 100%;
`;

export const ContentTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: ${colors.white};
  border: none;
  border-radius: 5px;
  color: ${colors.black};
  padding: 5px;
  transition: all 0.2s linear;
  width: 50%;

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
  font-size: 20px;
  margin-left: 20px;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.darken};
  }
`;
