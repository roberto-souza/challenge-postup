import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-loader-spinner';

import { colors } from '~/styles';

import { Container, Content } from './styles';

export default function Loader() {
  const show = useSelector(state => state.loader.show);

  return (
    show && (
      <Container>
        <Content>
          <Spinner
            type="RevolvingDot"
            color={colors.secondary}
            height={100}
            width={100}
          />
        </Content>
      </Container>
    )
  );
}
