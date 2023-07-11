'use client';
import React, { FC } from 'react';
import SurveyBuilder from './SurveyBuilder';
import { IQuestion } from '@shared/interfaces';

import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const Form: FC<{ questions: IQuestion[] }> = ({ questions }) => {
  const methods = useForm();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const data: any = {};

    // this is just to show a potential method for actually submitting a survey
    // its not particularly ideal
    for (let i = 0; i < questions.length; i++) {
      const multiInputTarget = target[`question-${i + 1}-group`];
      if (multiInputTarget) {
        data[`question-${i + 1}-answer`] = multiInputTarget.value;
        continue;
      }

      const value = target[`question-${i + 1}`].value;
      data[`question-${i + 1}-answer`] = value;
    }

    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <SurveyBuilder questions={questions} />
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
