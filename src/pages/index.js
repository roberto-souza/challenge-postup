import React, { Suspense } from 'react';

import Header from '~/components/Header';
import Loader from '~/components/Loader';

import Routes from '~/routes/app';

import { Container, Main } from './styles';

export default function Application() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Main>
          <Routes />
        </Main>
      </Suspense>
    </Container>
  );
}
