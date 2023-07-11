'use client';
import { Label, Input } from '@/styles';
import { QuestionType } from '@/constants';
import { IQuestion } from '@shared/interfaces';

import React, { FC, useState, useEffect } from 'react';

// TODO: simplify this whole component somehow
const SurveyBuilder: FC<{ questions: IQuestion[] }> = ({ questions }) => {
  const [count, setCount] = useState(0);
  const [questionInputs, setQuestionInputs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const SurveyInputs = () => {
      // TODO: each item doesnt have unique key?
      return questions.map((question: IQuestion, index: number) => {
        return <div key={index}>{addQuestionComponent(question)}</div>;
      });
    };

    setQuestionInputs(SurveyInputs);
  }, []);

  const addQuestionComponent = (question: IQuestion) => {
    setCount((prev) => prev + 1);
    return (
      <div>
        <Label htmlFor={`question-${count}`}>{question.question}</Label>
        {question.type === QuestionType.SHORT_TEXT && addShortTextQuestion()}
        {question.type === QuestionType.MULTI_OPTION_SINGLE_SELECT &&
          addMultiOptionSingleSelectQuestion(question)}
      </div>
    );
  };

  const addShortTextQuestion = () => {
    return (
      <Input
        id={`question-${count}`}
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      ></Input>
    );
  };

  const addMultiOptionSingleSelectQuestion = (question: IQuestion) => {
    return question.options?.map((option) => {
      return (
        <>
          <label htmlFor={option}> {option}</label>
          <input
            type="radio"
            id={option}
            name={`question-${count}-group`}
            value={option}
          ></input>
        </>
      );
    });
  };

  return <>{questionInputs && questionInputs}</>;
};

export default SurveyBuilder;
