import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';

import { yupFormSchema } from './index.schema';
import {
  Container,
  Form,
  Label,
  SubmitButton,
  TextInput,
} from './index.styles';

type FormValues = {
  name: string;
  lastName: string;
  age: number;
};

const HomeTemplate: NextPage = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(yupFormSchema),
  });

  const submitHandler = handleSubmit(
    (data: FormValues) => console.log(data),
    (error) => console.log('error', error)
  );

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Label>
          Name: <TextInput {...register('name')} type="text" />
        </Label>
        <Label>
          Last Name: <TextInput {...register('lastName')} type="text" />
        </Label>
        <Label>
          Age: <TextInput {...register('age')} type="number" />
        </Label>
        <SubmitButton type="submit" />
      </Form>
    </Container>
  );
};

export default HomeTemplate;
