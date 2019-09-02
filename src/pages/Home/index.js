import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Form } from '@rocketseat/unform';

import PostActions from '~/store/ducks/post';

import { PostValidation } from '~/validations';

import {
  Container,
  ContentBottom,
  ContentMiddle,
  ContentTop,
  Input,
  ButtonAdd,
  List,
  Item,
} from './styles';

export default function Home() {
  const [sort, setSort] = useState('AZ');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  function handleSubmit(post, { resetForm }) {
    dispatch(PostActions.insertPost(post));
    resetForm();
  }

  function handleUpVote(idPost) {
    dispatch(PostActions.upVote(idPost));
  }

  const init = useCallback(() => {
    dispatch(PostActions.getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Container>
      <ContentTop>
        <Form
          schema={PostValidation}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
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
        <button
          type="button"
          className={`sort ${sort === 'AZ' ? 'active' : ''}`}
          onClick={() => setSort('AZ')}
        >
          A-Z
        </button>
        <button
          type="button"
          className={`sort ${sort === 'ZA' ? 'active' : ''}`}
          onClick={() => setSort('ZA')}
        >
          Z-A
        </button>
        <button
          type="button"
          className={`sort ${sort === 'moreUpVote' ? 'active' : ''}`}
          onClick={() => setSort('moreUpVote')}
        >
          Mais votados
        </button>
        <button
          type="button"
          className={`sort ${sort === 'lessUpVote' ? 'active' : ''}`}
          onClick={() => setSort('lessUpVote')}
        >
          Menos votados
        </button>
      </ContentMiddle>
      <ContentBottom>
        <List>
          {posts.map(post => (
            <Item key={post.id}>
              <div>
                <span>{post.description}</span>
                <div>
                  <span>{post.upvote}</span>
                  <button type="button" onClick={() => handleUpVote(post.id)}>
                    <Icon icon="chevron-up" />
                  </button>
                </div>
              </div>
            </Item>
          ))}
        </List>
      </ContentBottom>
    </Container>
  );
}
