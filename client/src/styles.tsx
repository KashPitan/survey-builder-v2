import tw from 'twin.macro';
import styled from 'styled-components';

export const SubmitSurveyButton = styled.button`
  ${tw`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
`;

export const Button = styled.button`
  ${tw`rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
`;

export const Input = styled.input`
  ${tw`block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
`;

export const Label = styled.label`
  ${tw`block text-sm font-medium leading-6 text-gray-900`}
`;

export const Error = styled.p`
  ${tw`mt-2 text-sm text-red-600`}
`;
