const Types = {
  GET_ALL_REQUEST: 'posts/GET_ALL_REQUEST',
  GET_ALL_SUCCESS: 'posts/GET_ALL_SUCCESS',
};

export const PostTypes = Types;

const eaiFake = [
  {
    id: 1,
    description: 'Aqui vai um post bagual',
    upVotes: 10,
  },
  {
    id: 2,
    description: 'Aqui vai um post bagual',
    upVotes: 20,
  },
  {
    id: 3,
    description: 'Aqui vai um post bagual',
    upVotes: 30,
  },
];

const INITIAL_STATE = {
  posts: eaiFake,
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL_REQUEST:
      return { ...state };
    case Types.GET_ALL_SUCCESS:
      return { ...state, posts: action.payload };
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
};

export default PostActions;
