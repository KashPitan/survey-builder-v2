'use client';
import React, { FC, ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
  questionCount: number;
}

const FormContainer: FC<FormContainerProps> = ({ children, questionCount }) => {
  // TODO: add event type
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const data: any = {};

    // this is just to show a potential method for actually submitting a survey
    // its not particularly ideal
    for (let i = 0; i < questionCount; i++) {
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
    <form onSubmit={handleSubmit}>
      {children}
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormContainer;
