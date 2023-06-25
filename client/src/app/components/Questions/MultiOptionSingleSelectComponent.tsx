'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMultiOptionSingleSelectQuestion } from '@/app/redux/slices/surveySlice';
import Errors from './Errors';

const MultiOptionSingleSelectComponent = () => {
  const dispatch = useDispatch();

  // component state
  const [optionsList, setOptionsList] = useState<string[]>([]);
  const [question, setQuestion] = useState('');
  const [optionInputValue, setOptionInputValue] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const addButtonOnClickHandler = () => {
    setOptionsList((prevState) => [...prevState, optionInputValue]);
    setOptionInputValue('');
  };

  const optionInputOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOptionInputValue(event.target.value);
  };

  const questionInputOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuestion(event.target.value);
  };

  const submitButtonHandler = () => {
    clearErrors();
    const isValid = validateForm();
    if (!isValid) return;

    dispatch(addMultiOptionSingleSelectQuestion({ question, optionsList }));
    resetForm();
  };

  const resetForm = () => {
    setQuestion('');
    setOptionsList([]);
    setOptionInputValue('');
  };

  const clearErrors = () => {
    setErrors([]);
  };

  const validateForm = () => {
    if (question.length < 3) {
      setErrors((prevState) => [
        ...prevState,
        'Question must be at least 3 characters in length',
      ]);
    }
    if (optionsList.length < 2) {
      setErrors((prevState) => [
        ...prevState,
        'You must add at least 2 options',
      ]);
      return false;
    }

    clearErrors();
    return true;
  };

  return (
    <>
      <div>Current Options: {optionsList.join()}</div>
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
      <br></br>
      <label
        htmlFor="option-list-input"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add list Option
      </label>
      <input
        id="option-list-input"
        type="text"
        value={optionInputValue}
        className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={optionInputOnChangeHandler}
      ></input>
      <button
        id="add-option-button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={addButtonOnClickHandler}
        disabled={!optionInputValue}
      >
        add option
      </button>
      <Errors errors={errors} />
      <button
        className="rounded-md block bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={submitButtonHandler}
      >
        Add Question To Survey
      </button>
    </>
  );
};

export default MultiOptionSingleSelectComponent;
