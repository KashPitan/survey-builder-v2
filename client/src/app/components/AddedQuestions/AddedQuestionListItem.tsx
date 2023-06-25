import React, { FC } from 'react';
import { IQuestion } from '@shared/interfaces';

const AddedQuestionListItem: FC<{ question: IQuestion }> = ({ question }) => {
  return (
    // format this
    <div>
      {question.question} {question.type} {question.options?.join()}
    </div>
  );
};

export default AddedQuestionListItem;
