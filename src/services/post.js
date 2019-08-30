import api from '~/services/api';

const findAll = () => api.get(`/posts`);

const insert = post => api.post(`/posts`, post);

export const PostService = { findAll, insert };
