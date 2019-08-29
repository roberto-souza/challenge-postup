import styled from 'styled-components';

import { colors } from '~/styles';

export const Container = styled.header`
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Logo = styled.span`
  color: ${colors.secondary};
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  user-select: none;
`;
