import { call, put } from 'redux-saga/effects';

import PostActions from '~/store/ducks/post';
import LoaderActions from '~/store/ducks/loader';

import { PostService } from '~/services/post';

export function* getAllPosts({ payload }) {
  try {
    yield put(LoaderActions.start());

    const filter = payload || '';
    const posts = yield call(PostService.findAll, filter);

    if (posts.ok) {
      yield put(PostActions.getAllPostsSuccess(posts.data));
    }

    yield put(LoaderActions.finish());
  } catch (e) {
    yield put(LoaderActions.finish());
  }
}

export function* insertPost({ payload }) {
  try {
    yield put(LoaderActions.start());

    yield call(PostService.insert, payload);

    yield put(PostActions.getAllPosts('sort=upvote&sortDirection=desc'));

    yield put(LoaderActions.finish());
  } catch (e) {
    yield put(LoaderActions.finish());
  }
}

export function* upVotePost({ payload }) {
  try {
    yield put(LoaderActions.start());

    yield call(PostService.upVote, payload);

    yield put(PostActions.getAllPosts());

    yield put(LoaderActions.finish());
  } catch (e) {
    yield put(LoaderActions.finish());
  }
}
