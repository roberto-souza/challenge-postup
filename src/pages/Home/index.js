import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
  Container,
  ContentMiddle,
  ContentTop,
  Input,
  ButtonAdd,
  List,
  Item,
} from './styles';

export default function Home() {
  const posts = useSelector(state => state.post.posts);

  return (
    <Container>
      <ContentTop>
        <Input placeholder="Digite o post do momento..." />
        <ButtonAdd>
          <Icon icon="plus" />
        </ButtonAdd>
      </ContentTop>
      <ContentMiddle>
        <List>
          {posts.map(post => (
            <Item key={post.id}>
              <div>
                <span>{post.description}</span>
                <div>
                  <span>{post.upVotes}</span>
                  <button type="button">
                    <Icon icon="chevron-up" />
                  </button>
                </div>
              </div>
            </Item>
          ))}
        </List>
      </ContentMiddle>
    </Container>
  );
}
