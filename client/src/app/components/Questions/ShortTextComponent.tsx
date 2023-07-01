'use client';

import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addShortTextQuestion } from '@/redux/slices/surveySlice';
import Errors from './Errors';

const ShortTextComponent = () => {
  const dispatch = useDispatch();

  // component state
  const [question, setQuestion] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const questionInputOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuestion(event.target.value);
  };

  const submitButtonHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const isValid = validateForm(question);
    if (!isValid) return;

    dispatch(addShortTextQuestion({ question }));
    resetForm();
  };

  const resetForm = () => setQuestion('');

  const validateForm = (question: string) => {
    if (question.length < 3) {
      setErrors((prevState) => [
        ...prevState,
        'Question must be at least 3 characters in length',
      ]);
      return false;
    }

    setErrors([]);
    return true;
  };

  return (
    <>
      <form onSubmit={submitButtonHandler}>
        <label
          htmlFor="question-input"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Enter Question:
        </label>
        <input
          id="question-input"
          type="text"
          value={question}
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={questionInputOnChangeHandler}
        ></input>
        <Errors errors={errors} />
        <button
          type="submit"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Add Question To Survey
        </button>
      </form>
    </>
  );
};

export default ShortTextComponent;
