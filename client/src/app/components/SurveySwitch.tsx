import { QuestionType, QuestionTypeValues } from '../constants';

import { useState } from 'react';
import QuestionInput from './QuestionInput';
import { titleCase } from '../utils';

const SurveySwitch = () => {
  const [questionType, setQuestionType] = useState<QuestionType | null>(
    QuestionType.SHORT_TEXT
  );

  const questionTypeOnChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => setQuestionType(event.target.value as QuestionType);

  return (
    <>
      <label htmlFor="question-type">Choose a question type</label>

      <select
        name="question-type"
        id="question-type"
        className="relative block rounded-none rounded-t-md rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={questionTypeOnChangeHandler}
      >
        {QuestionTypeValues.map((questionType, index) => {
          return (
            <option value={questionType} key={index}>
              {titleCase(questionType)}
            </option>
          );
        })}
      </select>

      {questionType && <QuestionInput type={questionType} />}
    </>
  );
};

export default SurveySwitch;
