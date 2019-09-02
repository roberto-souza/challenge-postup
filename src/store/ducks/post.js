const Types = {
  GET_ALL_REQUEST: 'posts/GET_ALL_REQUEST',
  GET_ALL_SUCCESS: 'posts/GET_ALL_SUCCESS',
  INSERT: 'posts/INSERT',
  UPVOTE: 'posts/UPVOTE',
};

export const PostTypes = Types;

const INITIAL_STATE = {
  posts: [],
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL_REQUEST:
      return { ...state };
    case Types.GET_ALL_SUCCESS:
      return { ...state, posts: action.payload };
    case Types.INSERT:
      return { ...state };
    case Types.UPVOTE:
      return { ...state };
    default:
      return state;
  }
}

const PostActions = {
  getAllPosts: filter => ({
    type: Types.GET_ALL_REQUEST,
    payload: filter,
  }),
  getAllPostsSuccess: posts => ({
    type: Types.GET_ALL_SUCCESS,
    payload: posts,
  }),
  insertPost: post => ({
    type: Types.INSERT,
    payload: post,
  }),
  upVote: id => ({
    type: Types.UPVOTE,
    payload: id,
  }),
};

export default PostActions;
