import { all, takeLatest } from 'redux-saga/effects';

import { PostTypes } from '~/store/ducks/post';

import { getAllPosts, insertPost, upVotePost } from './post';

export default function* root() {
  return yield all([
    takeLatest(PostTypes.GET_ALL_REQUEST, getAllPosts),
    takeLatest(PostTypes.INSERT, insertPost),
    takeLatest(PostTypes.UPVOTE, upVotePost),
  ]);
}
