import * as Yup from 'yup';

const PostValidation = Yup.object().shape({
  description: Yup.string().required('Você deve escrever algo para postar'),
});

export default PostValidation;
