'use client';
import { Label, Input } from '@/styles';
import { QuestionType } from '@/constants';
import { IQuestionResponse } from '@shared/interfaces';

import React, { FC, useState, useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

// TODO: simplify this whole component somehow
const SurveyBuilder: FC<{ questions: IQuestionResponse[] }> = ({
  questions,
}) => {
  const [questionInputs, setQuestionInputs] = useState<JSX.Element[]>([]);

  const { register } = useFormContext();

  useEffect(() => {
    const SurveyInputs = () => {
      // TODO: each item doesnt have unique key?
      return questions.map((question: IQuestionResponse, index: number) => {
        return <div key={index}>{addQuestionComponent(question)}</div>;
      });
    };

    setQuestionInputs(SurveyInputs);
  }, []);

  const addQuestionComponent = (question: IQuestionResponse) => {
    return (
      <div>
        <Label htmlFor={`question-${question.id}`}>{question.question}</Label>
        {question.type === QuestionType.SHORT_TEXT &&
          addShortTextQuestion(question)}
        {question.type === QuestionType.MULTI_OPTION_SINGLE_SELECT &&
          addMultiOptionSingleSelectQuestion(question)}
      </div>
    );
  };

  const addShortTextQuestion = (question: IQuestionResponse) => {
    return (
      <Input
        {...register(`question-${question.id}`)}
        id={`question-${question.id}`}
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      ></Input>
    );
  };

  const addMultiOptionSingleSelectQuestion = (question: IQuestionResponse) => {
    return question.options?.map((option) => {
      return (
        <>
          <label htmlFor={option}> {option}</label>
          <input
            {...register(`question-${question.id}`)}
            type="radio"
            id={option}
          ></input>
        </>
      );
    });
  };

  return <>{questionInputs && questionInputs}</>;
};

export default SurveyBuilder;
