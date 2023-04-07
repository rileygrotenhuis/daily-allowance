import * as Yup from 'yup';

export const createExampleSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().optional(),
});
