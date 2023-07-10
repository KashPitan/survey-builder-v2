'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMultiOptionSingleSelectQuestion } from '@/redux/slices/surveySlice';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, Input, Label } from '@/styles';
import Errors from './Errors';

const MultiOptionSingleSelectComponent = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Current Options: {optionsList.join()}</div>
      <Label htmlFor="question-input">Enter Question:</Label>
      <Input
        id="question-input"
        type="text"
        value={question}
        onChange={questionInputOnChangeHandler}
      />
      <br></br>
      <Label htmlFor="option-list-input">Add list Option</Label>
      <Input
        id="option-list-input"
        type="text"
        value={optionInputValue}
        onChange={optionInputOnChangeHandler}
      ></Input>
      <Button
        id="add-option-button"
        onClick={addButtonOnClickHandler}
        disabled={!optionInputValue}
      >
        add option
      </Button>
      <Errors errors={errors} />
      <Button onClick={submitButtonHandler}>Add Question To Survey</Button>
    </form>
  );
};

export default MultiOptionSingleSelectComponent;
