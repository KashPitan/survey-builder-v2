'use client';
import React, { FC } from 'react';

import SurveyBuilder from './SurveyBuilder';
import { IQuestionResponse } from '@shared/interfaces';

import { useForm, FormProvider } from 'react-hook-form';

const Form: FC<{ questions: IQuestionResponse[] }> = ({ questions }) => {
  const methods = useForm();

  const onSubmit = async (data) => {
    try {
      const rawResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/answers`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const content = await rawResponse.json();
      if (content.statusCode === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SurveyBuilder questions={questions} />
        <button
          type="submit"
          className="rounded-md bg-indigo-400 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
