import api from '~/services/api';

const findAll = () => api.get(`/posts`);

export const PostService = { findAll };
