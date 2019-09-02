import api from '~/services/api';

const findAll = () => api.get(`/posts`);

const insert = post => api.post(`/posts`, post);

const upVote = id => api.put(`/posts/upvote/${id}`);

export const PostService = { findAll, insert, upVote };
