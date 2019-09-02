import api from '~/services/api';

const findAll = filter => api.get(`/posts?${filter}`);

const insert = post => api.post(`/posts`, post);

const upVote = id => api.put(`/posts/upvote/${id}`);

export const PostService = { findAll, insert, upVote };
