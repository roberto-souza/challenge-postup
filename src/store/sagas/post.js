import { call, put } from 'redux-saga/effects';

import PostActions from '~/store/ducks/post';
import LoaderActions from '~/store/ducks/loader';

import { PostService } from '~/services/post';

export function* getAllPosts() {
  try {
    yield put(LoaderActions.start());

    const posts = yield call(PostService.findAll);

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

    yield put(PostActions.getAllPosts());

    yield put(LoaderActions.finish());
  } catch (e) {
    yield put(LoaderActions.finish());
  }
}
