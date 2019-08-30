import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Form } from '@rocketseat/unform';

import PostActions from '~/store/ducks/post';

import { PostValidation } from '~/validations';

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
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  const init = useCallback(() => {
    dispatch(PostActions.getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Container>
      <ContentTop>
        <Form schema={PostValidation} onSubmit={() => {}} autoComplete="off">
          <Input
            autoFocus
            name="description"
            placeholder="Digite o post do momento..."
          />
          <ButtonAdd type="submit">
            <Icon icon="plus" />
          </ButtonAdd>
        </Form>
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
