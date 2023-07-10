'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { addShortTextQuestion } from '@/redux/slices/surveySlice';

import { useForm } from 'react-hook-form';

import { Button, Input, Label, Error } from '@/styles';

const ShortTextComponent = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data: { question: string }) => {
    const { question } = data;
    const formattedQuestion =
      question[0].toUpperCase() + question.slice(1).toLowerCase();
    console.log(formattedQuestion);
    dispatch(addShortTextQuestion({ question: formattedQuestion }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="question-input">Enter Question:</Label>
      <Input
        id="question-input"
        {...register('question', {
          required: { value: true, message: 'You must enter a question' },
          minLength: {
            value: 3,
            message: 'Question must be at least 3 characters long',
          },
        })}
        type="text"
      />
      <Error>{errors.question?.message}</Error>
      <Button type="submit"> Add Question To Survey</Button>
    </form>
  );
};

export default ShortTextComponent;
