'use client';

import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addShortTextQuestion } from '@/redux/slices/surveySlice';
import Errors from './Errors';
import { Button, Input, Label } from '@/styles';

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
        <Label htmlFor="question-input">Enter Question:</Label>
        <Input
          id="question-input"
          type="text"
          value={question}
          onChange={questionInputOnChangeHandler}
        />
        <Errors errors={errors} />
        <Button type="submit"> Add Question To Survey</Button>
      </form>
    </>
  );
};

export default ShortTextComponent;
