import React from 'react';

import { Container, ContentTop, Input, ButtonAdd } from './styles';

export default function Home() {
  return (
    <Container>
      <ContentTop>
        <Input placeholder="Digite o post do momento..." />
        <ButtonAdd>+</ButtonAdd>
      </ContentTop>
    </Container>
  );
}
