import * as yup from 'yup';

export const yupFormSchema = yup.object({
  name: yup.string().required(),
  lastName: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  age: yup.number().min(18).required(),
});
