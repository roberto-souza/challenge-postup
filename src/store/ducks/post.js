const Types = {
  GET_ALL_REQUEST: 'posts/GET_ALL_REQUEST',
  GET_ALL_SUCCESS: 'posts/GET_ALL_SUCCESS',
  INSERT: 'posts/INSERT',
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
    default:
      return state;
  }
}

const PostActions = {
  getAllPosts: () => ({
    type: Types.GET_ALL_REQUEST,
  }),
  getAllPostsSuccess: posts => ({
    type: Types.GET_ALL_SUCCESS,
    payload: posts,
  }),
  insertPost: post => ({
    type: Types.INSERT,
    payload: post,
  }),
};

export default PostActions;
