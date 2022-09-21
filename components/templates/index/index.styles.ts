import tw from 'twin.macro';

export const Container = tw.div`
  p-2
`;

export const Form = tw.form`
  flex
  flex-col
  w-80
  space-y-2
`;

export const TextInput = tw.input`
  border-blue-500
  border
  rounded-sm
`;

export const SubmitButton = tw.input`
  cursor-pointer
  bg-green-500
  text-white
`;

export const Label = tw.label`
  flex
  flex-col
`;
